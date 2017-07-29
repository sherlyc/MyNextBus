import React from 'react'
import './App.css';
import moment from 'moment'

class CountdownTimer extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                timer : 0
            }
        this.tick = this.tick.bind(this)
    }
    tick () {
        this.setState({ timer: this.state.timer - 1})
        
        if (this.state.timer <= 0) {
            console.log("times up")
            this.props.callback()
            clearInterval(this.interval)

        }

    }

    componentDidMount () {
      // this.setState({ timer: this.props.timer})
      // this.interval = setInterval(this.tick, 1000)
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ timer : nextProps.timer})
        this.interval = setInterval(this.tick, 2000)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    render () {
        return (
            <div>
               Refreshing after : {this.state.timer} seconds
               <button onClick = {this.props.callback}> Refresh Manually </button>
            </div>
        )
    }

}

export default CountdownTimer