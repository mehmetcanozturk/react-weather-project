import clouds from "./assets/Clouds.jpg"
import Rain from "./assets/Rain.jpg"
import Clear from "./assets/Clear.jpg"
import Mist from "./assets/Mist.jpg"
import Sunset from "./assets/sunset.jpg"

class Weather {
    static name = "Sunset"
}
export default function Background({ data }) {

    var weather = data.weather !== undefined ? data.weather[0].main : 'default'
    console.log(weather)
    if (weather !== 'default') {
        Weather.name = weather
    }

    switch (Weather.name) {
        case "Clouds":
            return <img src={clouds} alt="" />
        case "Rain":
            return <img src={Rain} alt="" />
        case "Clear":
            return <img src={Clear} alt="" />
        case "Mist":
            return <img src={Mist} alt="" />
        case "Sunset":
            return <img src={Sunset} alt="" />
        default:
            return null
    }

}
