import React, { Component } from 'react';

class DataSource extends Component {

  constructor(){
    super();
    this.state = {
      dataSource: []
    }
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
      fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(response => response.json())
      .then(data => this.setState({ dataSource : data['Brastlewark'] }));
  }
  
  render() {
    return (
         <ul>
            {this.state.dataSource.map(function(item,i){
               return (<li key={i}>{item.name}</li>)
            }
          )}
          </ul>
    );
  }
}

export default DataSource;
