import React from 'react';
import icon from "./icon.png";



export default function Header(props) {
    const dataObj = props.data;
    //console.log(resJSON);
    const iconUrl=`http://openweathermap.org/img/wn/${dataObj.weather[0].icon}@2x.png`
    console.log(iconUrl);
    return (
        <section>
            <div className="container">
                <div className="header">
                    <div className="left">
                        <img src={iconUrl} alt="" />

                    </div>
                    <div className="right">
                        <input type="text" value={props.city} className="mx-4" onChange={props.handleOnchange} />
                        <button type="button" className="btn btn-info mx-4" onClick={props.handleOnclick}>Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
