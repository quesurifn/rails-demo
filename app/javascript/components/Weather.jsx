import React from 'react'
import Day from '../components/Day'
import { parse } from 'upath';

class Weather extends React.PureComponent {
    constructor() {
        super();
        this.state = { 
            weatherData: [],
            error: null
        }
    }

    async componentDidMount() {
        
       const unparsedData = await fetch('/api/');
       const parsedData = await unparsedData.json();
       console.log(parsedData)
       this.setState({weatherData: parsedData})
    }

    render() {
        const  { weatherData } = this.state;
        return (
            <div className="container">
                {weatherData.map((e, idx) => {
                    <Day className="cell" key={idx} day={e} />
                })}
            </div>
        )
    }
}

export default Weather;