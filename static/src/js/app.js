/* ---- particles.js config ---- */

import * as forever from './assets/forever.json'
import * as superlove from './assets/superlove.json'

// 파티클 먼저 정의
particlesJS("particles-js")

// const particleCanvas = document.getElementsByClassName('particles-js-canvas-el')[0]




const foreverButton = document.getElementById('forever')
foreverButton.addEventListener('play', function() {
    particlesJS("particles-js", forever)

})


const superloveButton = document.getElementById('superlove')
superloveButton.addEventListener('play', function() {
    particlesJS("particles-js", superlove)
})

  
