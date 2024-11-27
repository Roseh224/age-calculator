import few from '../assets/fewCandles.png';
import some from '../assets/someCandles.png';
import many from '../assets/manyCandles.png';

export default function Result({age, unit}) {
    return(
        <div>
            <h2>You are {age} {unit}s old!</h2>
        <img src={few} alt="A birthday cake with a few candles" />
        </div>
    )
}