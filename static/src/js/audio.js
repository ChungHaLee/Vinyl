'use strict';

let analyser, src, bufferLength, dataArray, audio_context;
let chroma, maxChroma, energy, amplitudeSpectrum;



function meydaAnalyser(audio) {
    audio_context = audio_context || new AudioContext();
    if (!src) {
        analyser = audio_context.createAnalyser();
        src = audio_context.createMediaElementSource(audio)
        src.connect(analyser);
        analyser.connect(audio_context.destination)
    }
    audio.volume = 0.4;

    chroma = 0;
    maxChroma = 0;
    energy = 0;
    amplitudeSpectrum = 0;

    const meyda_analyser = Meyda.createMeydaAnalyzer({
        audioContext: audio_context,
        source: src,
        buffersize: 1024,
        featureExtractors: ["energy"],
        callback: (features) => {
            energy = features['energy']
            console.log('energy', energy)
        }
    })

    meyda_analyser.start();
    audio.play();
}









export { meydaAnalyser }