//import logo from './logo.svg';
import './style.css';
import image2 from './image2.jpg';


function App() {
  return (
    <div className="App">
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

        <h1 class="title red">Ashraf</h1>

        <br />

        <img src="./image1.jpg" alt="image1" />

        <br />

        <img src={image2}  alt="image2" />

        </div>

        <video width="320" height="240" controls>

        <source src="./myVideo.mp4" type="video/mp4" />

        </video>
    </div>
  );
}

export default App;
