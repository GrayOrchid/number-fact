import { Input, RandomPicker } from "../../components";
import './number.css'
export default function Number({number, setNumber,random, setRandom, isRandom, setIsRandom, label}) {
    return (
        <div className="number-container">
            <Input number={number} setNumber={setNumber} setIsRandom={setIsRandom}  max={9999} label={label}/>
            <RandomPicker
                number={random}
                setNumber={setRandom}
                setIsRandom={setIsRandom}
                isRandom={isRandom}
                max={9999}
            />
        </div>
    )
}