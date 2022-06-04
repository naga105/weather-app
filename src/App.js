import logo from './utils/image/weather-icon.ico';
import './App.css';
import Block from './utils/components/Block.js';
import Form from './utils/components/Form.js';
const  App= () => {  
  return (
    <div className="bg-color">
    <div className="container">
      <img className="weather-icon" src={logo} alt="" />
      <h1 className="font-setting">WEATHER APP</h1>    
    </div >
    <Form />
    <div className="display-grid">
     <Block value="abc"/>
     <Block value="def"/>
     <Block value="ghi"/>
    </div>
    </div>
  );
}

export default App;
