import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {insertPerson} from './apiMysql';

function App() {
const [nombre, setNombre] = useState(null);
const [apellido_p, setApellido_p] = useState(null);
const [apellido_m, setApellido_m] = useState(null);
  return (
    <div>

        <label>Ingresa tu nombre</label>
        <input type='text' onChange={(val)=>{
          setNombre(val)
        }}>
        </input>
        
        <label>Imgresa tu apellido paterno</label>
        <input type='text' onChange={(val)=>{
          setApellido_p(val);
        }}>
        </input>

        <label>Ingresa tu apellido materno</label>
        <input type='text' onChange={(val)=>{
          setApellido_m(val);
        }}>
        </input>

       <button onClick={console.log(nombre,apellido_p,apellido_m)}>Registrar persona</button>
     
    </div>
  );
}

export default App;
