import { Input, RandomPicker } from "../../components";
import './date.css'
export default function Date({ month, setMonth, day, setDay, isRandom, setIsRandom, randomDay, setRandomDay, randomMonth, setRandomMonth }) {
    return (
        <div className="date-container">
            <Input number={day} setNumber={setDay} setIsRandom={setIsRandom} max={31} label={'Day'} />
            <RandomPicker
                number={randomDay}
                setNumber={setRandomDay}
                setIsRandom={setIsRandom}
                isRandom={isRandom}
                max={31}
            />
            <Input number={month} setNumber={setMonth} setIsRandom={setIsRandom} max={12} label={'Month'} />
            <RandomPicker
                number={randomMonth}
                setNumber={setRandomMonth}
                setIsRandom={setIsRandom}
                isRandom={isRandom}
                max={12}
            />
        </div>
    )
}