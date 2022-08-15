import clouds from "./assets/Clouds.jpg"
import Rain from "./assets/Rain.jpg"
import Clear from "./assets/Clear.jpg"
import $ from "jquery";
class Weather {
    static name = "Clear"
}
export default function Background({ data }) {

    var weather = data.weather !== undefined ? data.weather[0].main : 'default'
    console.log(weather)
    if (weather != 'default') {
        Weather.name = weather
    }

    switch (Weather.name) {
        case "Clouds":
            return <img src={clouds} alt="" />
        case "Rain":
            return <img src={Rain} alt="" />
        case "Clear":
            return <img src={Clear} alt="" />

        default:
            return null
    }

}
