import React from 'react'


class Day extends React.Component {
    render() {
        const { day } = this.props
        
        let conditionPhoto = null; 
        const description = day.description
        if(~description.indexOf("partly") || ~description.indexOf("mostly")
        || ~description.indexOf("scattered")  || ~description.indexOf("broken")
        || ~description.indexOf("few")) {
            conditionPhoto = <img src={require('images/partly.svg')} />
         } else if(~description.indexOf('clear')) {
             conditionPhoto = <img src={require('images/sun.svg')} />
         } else if(~description.indexOf('thunder')) {
            conditionPhoto = <img src={require('images/thunder.svg')} />
         } else if(~description.indexOf('rain')) {
            conditionPhoto = <img src={require('images/rain.svg')} />
         } else if(~description.indexOf('clouds')) {
            conditionPhoto = <img src={require('images/cloudy.svg')} />
         } else {
             conditionPhoto = <img src={require('images/sun.svg')} />
         }

        return (
            <div className="day">
                {conditionPhoto}
                <p>{day.date}</p>
                <p>{day.description.split(" ").map(e => `${e.charAt(0).toUpperCase()}${e.slice(1)}` ).join(" ")}</p>
                <p>High: {day.max_temp}</p>
                <p>Low: {day.min_temp}</p>
                <p>Humidity: {day.average_humidity}</p>
                <p>Wind: {day.wind.speed} MPH</p>
            </div>
        )
    } 
}

export default Day;