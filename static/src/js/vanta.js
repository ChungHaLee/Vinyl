const lavenderHaze = VANTA.FOG({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 1500.00,
    minWidth: 1000.00,
    highlightColor: 0x7f53f7,
    midtoneColor: 0xa16dde,
    lowlightColor: 0x473fcd,
    baseColor: 0x463546,
    blurFactor: 0.24,
    speed: 3.60,
    zoom: 2.30
 })


const goodDays = VANTA.BIRDS({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 900.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x849184,
    color1: 0xdc8fbe,
    color2: 0x23f0,
    colorMode: "variance",
    wingSpan: 40.00,
    speedLimit: 6.00,
    separation: 51.00,
    alignment: 56.00,
    cohesion: 52.00,
    quantity: 4.00,
    backgroundAlpha: 0.79
})


const dreams = VANTA.TRUNK({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 900.00,
    minWidth: 800.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x642e11,
    backgroundColor: 0xf0c25a,
    spacing: 10.00,
    chaos: 2,
    p5: p5
  })


const lavenderHazeButton = document.getElementById('lavenderHaze')
lavenderHazeButton.addEventListener('play', function() {
    dreams.destroy();
    goodDays.destroy();
});


const goodDaysButton = document.getElementById('goodDays')
goodDaysButton.addEventListener('play', function() {
   lavenderHaze.destroy();
   dreams.destroy();
});


const dreamsButton = document.getElementById('dreams')
dreamsButton.addEventListener('play', function() {
   lavenderHaze.destroy();
   goodDays.destroy();
});