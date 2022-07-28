import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from './Pages/Home';
import Alert from './Components/Alert';

const Section = () => <section>section</section>;

function App() {
  const [counter, setCounter] = useState(1);
  const [photo, setPhoto] = useState();
  const [modalToggler, setModalToggler] = useState(true);

  const minmax = [0, 5];

  const [time,setTime] = useState(Date.now());


  useEffect(() => {
    console.log((time / 1000).toFixed())
    setTime(Date.now() - time)
    if((time / 1000).toFixed() > 5) {
      setTime(Date.now() - time)
      setModalToggler(!modalToggler)
    }
  }, [counter]);


  useEffect(() => {
    if (counter > 3) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${counter}`)
        .then(res => res.json())
        .then(data => setPhoto(data.url))
    }
  }, [counter]);

  const counterAddHandler = () => {
    (counter >= minmax[0]) && counter < minmax[1] ? setCounter(counter + 1) : setCounter(counter);
  };
  const counterSubtractHandler = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
  };

  const toggleHandler = () => {
    setModalToggler(!modalToggler)
  }


  return (
    <div className="App">
       <Link to="/register">Register</Link>
       <Link to="/gallery">Gallery</Link>
      <Alert children={<Section/>} title="this is nihuya sebe title" isActive={modalToggler} click={toggleHandler}/>
      <img src={photo} alt='' />
      <Home clildren={counter === 0 ? 'number is equal to zero' : counter} counterAddHandler={counterAddHandler} counterSubtractHandler={counterSubtractHandler} />
    </div>
  );
}

export default App;
