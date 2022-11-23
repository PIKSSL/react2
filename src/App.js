import Image from './Image.js';
import './App.css';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';

const images=[{
  img:img1
},{
  img:img2
},{
  img:img3
}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Images</h1>
      </header>
      <article>
        <Image image={images[0]} /> 
        <Image image={images[1]} />
        <Image image={images[2]} />

      </article>
      <div><p className="log"></p></div>
      <footer><p>György Krisztián</p></footer>
    </div>
  );
}

export default App;
