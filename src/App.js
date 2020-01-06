import React, { useState } from 'react';
import logo from './cg_logo.png';
import './App.css';
import ReactFileReader from 'react-file-reader';
import * as _ from 'lodash';

/* 
  Author: Will Minor
  Date: 1/05/20
  Client: CampGladiator
*/

function App() {

  const [fileOutput, setFileOutput] = useState(null);
  const CARDINAL_DIRECTIONS = [
    {letter:'N', x:0, y:1},
    {letter:'W', x:-1, y:0},
    {letter:'S', x:0, y:-1},
    {letter:'E', x:1, y:0}
  ];

  const handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      const lines = reader.result.split(/\r\n|\n/);
      const mapParams = lines[0].split(' ');
      const mapSize = { x: mapParams[0], y: mapParams[1] };
      const roverParams = _.chunk(lines.slice(1), 2);
      setFileOutput(roverParams.map((roverParamGroup) => {
        return moveRover(roverParamGroup, mapSize);
      }));
    }
    reader.readAsText(files[0]);
  };

  const moveRover = (roverParamGroup, mapSize) => {
    if (roverParamGroup[0] !== '') {
      const initPosition = roverParamGroup[0].split(' ');
      let position = {
        x: parseInt(initPosition[0], 10),
        y: parseInt(initPosition[1], 10)
      };
      let directionIndex = CARDINAL_DIRECTIONS.findIndex((direction) => direction.letter === initPosition[2]);
      roverParamGroup[1].split('').map((inputKey) => {
        if(position.x > mapSize.x || position.x < 0 || position.y > mapSize.y || position.y < 0) { return null; }
        switch(inputKey) {
          case 'M':
            const newX = position.x + CARDINAL_DIRECTIONS[directionIndex].x;
            const newY = position.y + CARDINAL_DIRECTIONS[directionIndex].y;
            position = {
              x: newX,
              y: newY
            }
            break;
          case 'L':
              if(directionIndex + 1 > (CARDINAL_DIRECTIONS.length - 1)) {
                directionIndex = 0;
              } else {
                directionIndex = directionIndex + 1;
              }
              break;
          case 'R':
              if(directionIndex - 1 < 0) {
                directionIndex = CARDINAL_DIRECTIONS.length - 1;
              } else {
                directionIndex = directionIndex - 1;
              }
              break;
          default: 
              break;
        }
        return null;
      });
      const resultingCoordinate = '(' + position.x.toString() + ' ' + position.y.toString() + ' ' + CARDINAL_DIRECTIONS[directionIndex].letter + ')';
      if(position.x > mapSize.x || position.x < 0 || position.y > mapSize.y || position.y < 0) {
        return  resultingCoordinate +  'Oh no! The Rover fell off the edge of the plateau at some point! 😦';
      }
      return resultingCoordinate;
    }
    return '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='header'> Camp Gladiator Rover v1</h1>
        <h4 className='header'> Codename: Red Rover </h4>
        <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload Rover File</button>
        </ReactFileReader>
        <ul className='roverList'>
        {_.map(fileOutput, (position, index) => (fileOutput) && (
          <li key={index} className='roverListItem'> Rover {index + 1}: {position}</li>
        )
        )}
        </ul>
      </header>
    </div>
  );
}

export default App;
