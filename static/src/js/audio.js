'use strict';


let audio, file, output, rAF;
let analyser, src, bufferLength, dataArray, audio_context;
let chroma, maxChroma, energy, amplitudeSpectrum;


const lavenderHazeButton = document.getElementById('lavenderHaze')
lavenderHazeButton.addEventListener('play', function() {
    meydaAnalyser(lavenderHazeButton);
});


const foreverButton = document.getElementById('forever')
foreverButton.addEventListener('play', function() {
    meydaAnalyser(forever);
});

const goodDaysButton = document.getElementById('goodDays')
goodDaysButton.addEventListener('play', function() {
    meydaAnalyser(goodDays);
});


const obsessedButton = document.getElementById('obsessed')
obsessedButton.addEventListener('play', function() {
    meydaAnalyser(obsessed);
});


const theothersideButton = document.getElementById('theotherside')
theothersideButton.addEventListener('play', function() {
    meydaAnalyser(theotherside);
});





function meydaAnalyser(audio) {
    
    audio_context = audio_context || new AudioContext();

    if (!src) {
        analyser = audio_context.createAnalyser();
        src = audio_context.createMediaElementSource(audio)
        src.connect(analyser);
        analyser.connect(audio_context.destination)
    }

    energy = 0;

    const meyda_analyser = Meyda.createMeydaAnalyzer({
        audioContext: audio_context,
        source: src,
        buffersize: 1024,
        featureExtractors: ["energy"],
        callback: (features) => {
            energy = features['energy']
            // console.log('energy', energy.toFixed(2))
            // if (energy.toFixed(2) > 50){
            //     console.log('*********강조*********')
            // }
        }
    })

    meyda_analyser.start();
};




export { meydaAnalyser, energy, audio_context }