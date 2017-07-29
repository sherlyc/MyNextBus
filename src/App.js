import React from 'react'
import './App.css';
import moment from 'moment'
import CountdownTimer from './CountdownTimer'

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
            arrivalTimer : "",
            timer : 10
        }
      this.fetchBusStopData = this.fetchBusStopData.bind(this)
      this.nothing = this.nothing.bind(this)
  }

  fetchBusStopData() {
    console.log("i am called")
    this.setState({
      timer: 60
    })
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
          arrivalTimer
        })
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  nothing() {
    console.log("you called me")
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

