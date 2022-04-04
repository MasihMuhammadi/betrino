import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import fontawesome from "@fortawesome/fontawesome-free/css/all.css";
import ReactDOM from 'react-dom';
import Backface from './backface';
import RandomCard from './random_card'

ReactDOM.render(<Backface />,document.getElementById('root')
);


export default Backface;
