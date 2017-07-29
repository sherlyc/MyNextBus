import React from 'react'
import './App.css';
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
            timer : "",
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
        let timer = moment(dateTime).fromNow()
        this.setState({
          timer
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
       <p>Next bus arriving:</p>
        {this.state.timer}

     </div>
    );
  }
}


export default App;

