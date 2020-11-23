import React from 'react';
import Image from './image';


const Header = ({ basics }) => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <h1>{basics.name}</h1>
          <h2>{basics.label}</h2>
        </div>
        <div className="col-sm-3">
        <Image src="MC.jpg" alt="Profile Image" style={{  border: '5px solid black',height:'200x',width:'250px'}}/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;