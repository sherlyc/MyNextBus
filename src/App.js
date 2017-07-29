import React from 'react'
import './App.css';
import moment from 'moment'
import CountdownTimer from './CountdownTimer'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
            arrivalTimer : "",
            timer : 60
        }
      this.fetchBusStopData = this.fetchBusStopData.bind(this)
  }

  fetchBusStopData() {
    console.log("called fetchBusStopData")
    const baseUrl = `https://www.metlink.org.nz/api/v1`;
    const path = `/StopDepartures/`;
    const stopNo = '5115'

      fetch(`${baseUrl}${path}${stopNo}`, { mode: 'cors'})
      .then((response)=>{
        return response.json()})
      .then((data)=>{
        console.log(data)
        let dateTime= moment().format(data.Services[0].ExpectedDeparture)
        console.log(dateTime)
        let arrivalTimer = moment(dateTime).fromNow()
        this.setState({
          arrivalTimer,
          timer : 60
        })
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  componentDidMount () {
   this.fetchBusStopData(); 
  }  

  render () {
    return (
     <div>
       <p>Next bus arriving:</p>
        {this.state.arrivalTimer}
       <CountdownTimer timer={this.state.timer} callback={this.fetchBusStopData}/>
     </div>
    );
  }
}

export default App;

