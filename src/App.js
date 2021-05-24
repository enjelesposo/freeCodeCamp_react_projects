import React, {useState} from 'react';
import './App.css';
// import images

import dogImgOne from './img/dog_1.jfif'
import dogImgTwo from './img/dog_2.jpg'
import dogImgThree from './img/dog_3.jpg'
import dogImgFour from './img/dog_4.jpg'
import dogImgFive from './img/dog_5.jfif'
// import component
import BirthdayInfo from './BirthdayInfo';

function App() {

  const [numBirthday, setNumBirthday] = useState(5);
  const [infos, setInfos] = useState([
    {
      name: 'Pochi',
      img: dogImgOne,
      age: 2,
      id: 0
    },
    {
      name: 'Kofi',
      img: dogImgTwo,
      age: 6,
      id: 1
    },
    {
      name: 'Bubba',
      img: dogImgThree,
      age: 4,
      id: 2
    },
    {
      name: 'Otto',
      img: dogImgFour,
      age: 10,
      id: 3
    }
    ,{
      name: 'Pogie',
      img: dogImgFive,
      age: 7,
      id: 4
    }
  ]);

  return (
    <div className="container">
      <h1>{numBirthday} birthdays today!</h1>
      {
        infos.map(info => {
          return <BirthdayInfo img={info.img} name={info.name} age={info.age} />
        })
      }
      <button className='btn' onClick={() => {
        setInfos([])
        setNumBirthday(0);
      }}>Clear All</button>
    </div>
  );
}

export default App;
