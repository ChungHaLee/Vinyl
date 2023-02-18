'use strict';
let answer;
let analyser, src, bufferLength, dataArray, audio_context;
let chroma, maxChroma, energy, amplitudeSpectrum, audio;



const lavenderHaze = new Audio('static/src/audio/LavenderHaze.mp3');
const forever = new Audio('static/src/audio/Forever.mp3');

function meydaAnalyser(audio) {
    // identifier();
    audio_context = audio_context || new AudioContext();
    if (!src) {
        analyser = audio_context.createAnalyser();
        src = audio_context.createMediaElementSource(audio)
        src.connect(analyser);
        analyser.connect(audio_context.destination)
    }
    // audio.volume = 0.4;

    // chroma = 0;
    // maxChroma = 0;
    energy = 0;
    // amplitudeSpectrum = 0;

    const meyda_analyser = Meyda.createMeydaAnalyzer({
        audioContext: audio_context,
        source: src,
        buffersize: 1024,
        featureExtractors: ["energy"],
        callback: (features) => {
            energy = features['energy']
            console.log('energy', energy.toFixed(2))
            if (energy.toFixed(2) > 50){
                console.log('*********강조*********')
            }
        }
    })

    meyda_analyser.start();
    audio.play();

}



export { meydaAnalyser }