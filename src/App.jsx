
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import requests from './Components/helpers/request';
import Nav from './Components/Nav/Nav';
import Result from './Components/results/result';

function App() {
  const[selectedOption,setSelectedOption]=useState(requests.fetchTrending)
  console.log(selectedOption);
  return (
   
    <div className='app'>
      <Header/>
      <Nav setSelectedOption={setSelectedOption}/>
      <Result selesctedOption={selectedOption}/>
    </div>
  );
}

export default App;
