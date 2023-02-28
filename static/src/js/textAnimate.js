import lavenderHaze from './lyrics/lavenderhaze.json'
import forever from './lyrics/forever.json'

// Wrap every letter in a span
let textWrapper_ml13 = document.querySelector('.ml13');
let textWrapper_ml14 = document.querySelector("#text-forever > h1 > span.letters.letters-1")

let totalSeconds = 0;

var timeNow, timeNowList, timeStart, timeEnd;


const text_lavenderHaze = document.getElementById('text-lavenderHaze')
const lavenderHazeButton = document.getElementById('lavenderHaze')

const text_forever = document.getElementById('text-forever')
const foreverButton = document.getElementById('forever')



function countUpTimer(){
    ++totalSeconds;
    var timestamps;
    var lyrics;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    var time = hour + ":" + minute + ":" + seconds;
    let i = 0;


    if (lavenderHazeButton.played.length == 1){
        timestamps = Object.keys(lavenderHaze)
        lyrics = Object.values(lavenderHaze)
    } else if (foreverButton.played.length == 1){
        timestamps = Object.keys(forever)
        lyrics = Object.values(forever)
    }


    while (i < timestamps.length){
        timeNow = timestamps[i]
        timeNowList = timeNow.split('-')
        timeStart = timeNowList[0]
        timeEnd = timeNowList[1]
        if (time == timeStart && lavenderHazeButton.played.length == 1){
            text_lavenderHaze.style.visibility = 'visible';
            textWrapper_ml13.innerHTML = lyrics[i].replace(/\S/g, "<span class='letter'>$&</span>");
            anime_slowUp();
        } else if (time == timeStart && foreverButton.played.length == 1){
            text_forever.style.visibility = 'visible';
            textWrapper_ml14.innerHTML = lyrics[i]
            anime_popUp();
        }
        i++;
    }
}





function anime_popUp(){
    var ml4 = {};
    ml4.opacityIn = [0,1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime.timeline({loop: false})
    .add({
        targets: '.ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn
    }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay
    }).add({
        targets: '.ml4',
        opacity: 1,
        duration: 500,
        delay: 500
    });
}


function anime_slowUp(){
    anime.timeline({loop: false})
    .add({
      targets: '.ml13 .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 300 + 30 * i
    }).add({
      targets: '.ml13 .letter',
      translateY: [0,-100],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1200,
      delay: (el, i) => 100 + 30 * i
    });
}



// 이벤트 리스너들
lavenderHazeButton.addEventListener('play', function () {
    textWrapper_ml13.innerHTML = textWrapper_ml13.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    text_lavenderHaze.style.visibility = 'visible';

    setInterval(countUpTimer, 1000); // 1초에 한번씩 CountUpTimer 실행
    anime_slowUp();

});


foreverButton.addEventListener('play', function () {
    // textWrapper_ml14.innerHTML = lyrics[i]
    text_forever.style.visibility = 'visible';
    setInterval(countUpTimer, 1000); // 1초에 한번씩 CountUpTimer 실행
    anime_popUp();
})

clearInterval();