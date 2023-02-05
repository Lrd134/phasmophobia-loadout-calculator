import React, {Component} from 'react';

class LoadoutSelector extends Component {
  constructor(props) {
    this.state = {data: null, REQUESTING: false}
  }
  componentDidMount() {
    getData();
  }
  render() {
    return (
      <span className="LoadoutSelector">
        <div className="items">
        
        </div>
      </span> 
    )
  }
    
}

export default LoadoutSelector;