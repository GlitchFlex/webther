import React from 'react'

export default function Main(props) {
    const dataObj = props.data;
    console.log(dataObj);
    const sunriseTime=new Date(dataObj.sys.sunrise);
    const sunsetTime=new Date(dataObj.sys.sunset);
    
   
    

    return (

        <div className="components">
            <div className="left">
                <div id="coord">
                    <p className="para">Latitude : {dataObj.coord.lat}</p>
                    <p className="para">Longitude : {dataObj.coord.lon}</p>
                </div>
                <div id="sentence">
                    <p>The weather outside is quite pleasant with broken clouds and  Its a perfect day for an outing.</p>
                    <p>Enjoy your day</p>
                </div>
            </div>
            <div className="right">
                <div id="one">
                    <p className="para a">Temperature <br /> <br/><span>{Math.round(dataObj.main.temp)-273 } C</span></p>
                    <p className="para b">Feels Like <br /><br /> <span>{Math.round(dataObj.main.feels_like)-273} C</span></p>
                </div>
                <div id="two">
                    <p className="para c">Humidity <br /><br /><span>{dataObj.main.humidity} %</span></p>
                    <p className="para d">Wind Speed  <br /><br /> <span>{dataObj.wind.speed}  m/s</span></p>
                </div>
                <div id="three">
                    <p className="para e">Sun-rise time <br /><br /><span>{sunriseTime.getHours()}:{sunriseTime.getMinutes()}</span></p>
                    <p className="para f">Sun-set time <br /><br /><span>{sunsetTime.getHours()}:{sunriseTime.getMinutes()}</span></p>
                </div>

                
            </div>
        </div>

    )
}
