import lavenderHaze from './lyrics/lavenderhaze.json'


// Wrap every letter in a span
let textWrapper = document.querySelector('.ml13');
let audio, currentTime;
let totalSeconds = 0;

var time, timeNow, timeNowList, timeStart, timeEnd;

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const text_lavenderHaze = document.getElementById('text-lavenderHaze')
const lavenderHazeButton = document.getElementById('lavenderHaze')


function countUpTimer(){
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    var time = hour + ":" + minute + ":" + seconds;

    let timestamps = Object.keys(lavenderHaze)
    let lyrics = Object.values(lavenderHaze)
    let i = 0;
    console.log(time)
    while (i < timestamps.length){
        timeNow = timestamps[i]
        timeNowList = timeNow.split('-')
        timeStart = timeNowList[0]
        timeEnd = timeNowList[1]
        if (time == timeStart){
            text_lavenderHaze.style.visibility = 'visible';
            textWrapper.innerHTML = lyrics[i].replace(/\S/g, "<span class='letter'>$&</span>");
            // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/, "<span class='letter'>$&</span>");
            anime_slowUp();
        }
        i++;
    }

    
}




// 이벤트 리스너
lavenderHazeButton.addEventListener('play', function () {
    text_lavenderHaze.style.visibility = 'visible';
    audio = lavenderHazeButton;
    // let a,b = jsonParser(lavenderHaze);
    // console.log(a, b)
    setInterval(countUpTimer, 1000);
    anime_slowUp();

    // anime.timeline({loop: true})
    // .add({
    //   targets: '.ml13 .letter',
    //   translateY: [100,0],
    //   translateZ: 0,
    //   opacity: [0,1],
    //   easing: "easeOutExpo",
    //   duration: 1400,
    //   delay: (el, i) => 300 + 30 * i
    // }).add({
    //   targets: '.ml13 .letter',
    //   translateY: [0,-100],
    //   opacity: [1,0],
    //   easing: "easeInExpo",
    //   duration: 1200,
    //   delay: (el, i) => 100 + 30 * i
    // });
});

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