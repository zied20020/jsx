import logo from './logo.svg';
import './App.css';
import image from "./nat.jpg"

function App() {
  return (
    <div className="App">
      <>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">ziedjlidi</h1>
    <br />
    <img src="/gomy.png"/>
    <br />
    <img src= {image} />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;
