'use strict';


let audio, file, output, rAF;
let analyser, src, bufferLength, dataArray, audio_context;
let chroma, energy, perceptualSpread, spectralCentroid, spectralKurtosis, spectralSpread;


const lavenderHazeButton = document.getElementById('lavenderHaze')
lavenderHazeButton.addEventListener('play', function() {
    meydaAnalyser(lavenderHazeButton);
});


const foreverButton = document.getElementById('forever')
foreverButton.addEventListener('play', function() {
    meydaAnalyser(foreverButton);
});

const goodDaysButton = document.getElementById('goodDays')
goodDaysButton.addEventListener('play', function() {
    meydaAnalyser(goodDaysButton);
});


const obsessedButton = document.getElementById('obsessed')
obsessedButton.addEventListener('play', function() {
    meydaAnalyser(obsessedButton);
});


const theothersideButton = document.getElementById('theotherside')
theothersideButton.addEventListener('play', function() {
    meydaAnalyser(theothersideButton);
});


const superloveButton = document.getElementById('superlove')
superloveButton.addEventListener('play', function() {
    meydaAnalyser(superloveButton);
});



function meydaAnalyser(audio) {
    
    audio_context = audio_context || new AudioContext();

    if (!src) {
        analyser = audio_context.createAnalyser();
        src = audio_context.createMediaElementSource(audio)
        src.connect(analyser);
        analyser.connect(audio_context.destination)
    }

    // energy = 0;

    const meyda_analyser = Meyda.createMeydaAnalyzer({
        audioContext: audio_context,
        source: src,
        buffersize: 1024,
        featureExtractors: ["energy", "perceptualSpread", "spectralCentroid", "spectralKurtosis", "chroma"],
        callback: (features) => {
            energy = features['energy']
            perceptualSpread = features['perceptualSpread']
            spectralSpread = features['spectralSpread']
            spectralCentroid = features['spectralCentroid']
            spectralKurtosis = features['spectralKurtosis']
            chroma = features['chroma']
            console.log(src)
            console.log('음역대', spectralCentroid);
            console.log('타임스탬프', audio_context.getOutputTimestamp().contextTime);
        }
    })

    meyda_analyser.start();
};




export { meydaAnalyser, energy, audio_context }