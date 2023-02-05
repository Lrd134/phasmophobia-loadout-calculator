import React, { Component } from 'react';
import './App.css';
import LoadoutSelector from './LoadoutSelector';

class PhasmophobiaLoadoutCalculator extends Component () {
  render() {
    return (
      <div className="PhasmophobiaLoadoutCalculator">
        <LoadoutSelector />
      </div>
    );
  }
}

export default PhasmophobiaLoadoutCalculator;
