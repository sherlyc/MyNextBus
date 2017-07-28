import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
            arrivalTime : ""
        }
  }

  fetchBusStopData(stopNo){
    const baseUrl = `https://www.metlink.org.nz/api/v1`;
    const path = `/StopDepartures/`;

      fetch(`${baseUrl}${path}${stopNo}`, { mode: 'cors'})
      .then((response)=>{
        return response.json()})
      .then((data)=>{
        console.log(data)
        let dateTime= new Date(data.Services[0].ExpectedDeparture)
        let arrivalTime = dateTime.getHours() + ':' + dateTime.getMinutes()
        this.setState({
           arrivalTime  
        })
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  componentDidMount () {
    this.fetchBusStopData('5115');
  }
  render () {
    return (
     <div>
       {this.state.arrivalTime}
     </div>
    );
  }
}


export default App;

