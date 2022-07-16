import react, {useEffect} from 'react';
import './App.css';
import hoverEffect from 'hover-effect';
import image from './image01.jpg';
import image2 from './image02.jpg';
import overlay from './stripe.png'

function App(){
  useEffect(()=> {
    var image_animate = new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: .5,
      image1: image,
      image2: image2,
      displacementImage: overlay
  })
  }
  
  )
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="item-header">
            <div className="item-header-heading">AURORA</div>
            <div className="item-header-heading2">Hover Effect</div>
          </div>
          <div className="item-image"></div>
          <div className="item-footer">
            <div className="item-footer-quote">Like a sky curtain.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
