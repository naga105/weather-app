import logo from './utils/image/weather-icon.png';
import './App.css';

const  App= () => {  
  return (
    <div className="container">
      <img className="weather-icon" src={logo} alt="" />
      <h1 className="font-setting">WEATHER `APP</h1>

    </div>
  );
}

export default App;
