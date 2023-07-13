import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { icons } from './Icons';


const Application: React.FC = () => {
  const [versions, setVersions] = useState<Record<string, string>>({});


  useEffect(() => {
    const app = document.getElementById('app');
    const versions = JSON.parse(app.getAttribute('data-versions'));
    setVersions(versions);
  }, []);

  return (
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>ERWT - Electron Boilerplate</h1>
        </div>
        <div className='main-teaser'>
          <div>
            Robust boilerplate for Desktop Applications with Electron and
            ReactJS.
            <br />
            Hot Reloading is used in this project for fast development
            experience.
            <br />
            If you think the project is useful enough, just spread the word
            around!
          </div>
        </div>
        <div className='versions'>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.electron} /> Electron
            </div>
            <span>{versions?.electron}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.erwt} /> ERWT
            </div>
            <span>{versions?.erwt}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.typescript} /> Typescript
            </div>
            <span>{versions?.typescript}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.nodejs} /> Nodejs
            </div>
            <span>{versions?.node}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.react} /> React
            </div>
            <span>{versions?.react}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.webpack} /> Webpack
            </div>
            <span>{versions?.webpack}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.chrome} /> Chrome
            </div>
            <span>{versions?.chrome}</span>
          </div>
          <div className='item'>
            <div>
              <img className='item-icon' src={icons.license} /> License
            </div>
            <span>{versions?.license}</span>
          </div>
          <Link to="/Index">Nothing Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Application;
