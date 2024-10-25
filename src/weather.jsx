import { useEffect, useState } from "react";
import './css/weather.css';
function GetWeather(){

    const APIKey = '76e81f20536a80f8fcc25c183ec6ec0a';
    const lat = 41;
    const lon = 123;
    const [metric, setMetric] = useState('℃');
    const [temp, setTemp] = useState(10);
    const [pic, setPic] = useState('sunny.png');

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => 
                {
                    setTemp(json.main.temp); 
                    if(metric === '℉'){
                        setTemp(t => { return (t * 1.8 + 32).toFixed(2); })
                    }
                    let wea = json.weather[0].main;
                    if(wea === 'Clouds'){setPic('mild.png');}
                    else if(wea === 'Rain' || wea === 'Snow' ) {setPic('cold.png');}
                    else {setPic('sunny.png');}
                })
            .catch(error => console.error("Error fetching weather data:", error));
    }, [metric]);

    const changeState = () =>{
        if(metric === '℃'){
            setMetric('℉');
        }
        else{
            setMetric('℃');
        }
    }

    return(
        
        <div>
            <div className="weaContainer">
                <img src={pic} alt="logo" className="weaImage" />
                <div className="weaText">temperature is {temp} {metric}</div>
                <button onClick={changeState}>Change metric</button>
            </div>
        </div>);
    
}
export default GetWeather;