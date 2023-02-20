import {CanvasSpace, Pt, Group, Line, Pts, Color, Num, Rectangle, hsl} from 'pts';

// Pts.quickStart("#pt_canvas");
let space = new CanvasSpace( "#pt_canvas" );
let form = space.getForm();
let width, height;
//// Demo code starts (anonymous function wrapper is optional) ---

function rectangle(width, height) {
  
  // to interpolate color
  var t = 0;
  
  // hsl max value range (360,1,1,1)
  let cu = Color.hsl( Color.maxValues("hsl") );
  
  // recursively subdivide a rectangle
  function subdivide( color, rect, depth, index, center ) {
    if (depth > 1) return;
    let qs = Rectangle.quadrants( rect, center );
    qs.map( (r) => r[1].ceil() ); // fix the floating-point stroke problem
    
    form.fill( color( rect.interpolate( t ) ) ).rects( qs );
    
    if (index < 0) {
      for (let i=0, len=qs.length; i<len; i++) {
        subdivide(color, qs[i], depth+1, i );
      }
    } else {
      let i = Num.boundValue( index+2, 0, 4 );
      subdivide(color, qs[i], depth+1, index );
    }
  }
  
  
  space.add( (time, ftime) => {
    
    t = Num.cycle( time%10000/10000 );
    
    // get HSL color string, given a point position
    let color = (p) => {
        // 색상 지정 (무지개 - 도레미파솔라시도)
        let p1 = p.$divide(space.size);
        // console.log('p1', p1);
        let p2 = space.pointer.$divide(space.size);
        // console.log('p2', p2);
        let c = cu.$multiply( Pt.make( 4, 1 ).to( p2.x, p2.y/2 + p1.x/2, p1.y ) );
        return Color.HSLtoRGB( c ).toString("rgb");
    }
    
    form.stroke(false);
    subdivide( color, space.innerBound, 0, -1, [width, height] );
  });
  
  //// ----
  
  
  space.bindMouse().bindTouch().play();
  
};



export { rectangle, width, height  }