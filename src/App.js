import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import { useState, useEffect } from "react";



function App() {

  const [city, setCity] = useState("kolkata");
  const [data, setData] = useState(null);
  const handleOnchange = (event) => {
    // console.log(event);
    setCity(event.target.value);
  }

  const fetchApi = async () => {
    const key = "ff602702c12304067c38dbd0d6ee3eda";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    const response = await fetch(url);
    const resJSON = await response.json();
    //console.log(resJSON);
    setData(resJSON);
  }

  const handleOnclick = () => {
    //console.log("cliicked");

    fetchApi();

  }

  useEffect(() => {
    handleOnclick();
  }, []);
  //console.log(data);
  return (
    <div className="main">
      {data !=null ? <Header handleOnchange={handleOnchange} city={city} handleOnclick={handleOnclick} data={data}/> : null}
     
      {data != null ? <Main data={data} /> : null}
    </div>
  );
}

export default App;
