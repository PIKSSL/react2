import './Image.css';



function Image(props) {

  function click(){
    console.log("Click:", props.image)
  }

    return (
      <div className="Image">
        <div className="img_">
          <img onClick={click} src={props.image.img}/>
        </div>
      </div>
    );
  }
  
  export default Image;
  