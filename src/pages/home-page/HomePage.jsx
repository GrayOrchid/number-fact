import { useState } from 'react';
import './homePage.css'
import { AnimateLinkBtn, Dropdown, LinkBtn } from '../../components';
import { Date, Number } from '../../widgets';


function HomePage() {
    const [number, setNumber] = useState();
    const [selected, setSelected] = useState('math');
    const [random, setRandom] = useState(null)
    const [randomDay, setRandomDay] = useState(null)
    const [randomMonth, setRandomMonth] = useState(null)
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [isRandom, setIsRandom] = useState(false)
    const chosenNumber = isRandom ? random : number;

    return (
        <div className='home-page'>
            <div className='home-page--content'>
                <Dropdown selected={selected} setSelected={setSelected} />
                {selected !== 'date' ? ( 
                    <>
                        <Number number={number} setNumber={setNumber} random={random} setRandom={setRandom} isRandom={isRandom} setIsRandom={setIsRandom} selected={selected} label={'Number'} />
                        <AnimateLinkBtn show={chosenNumber}>
                            <LinkBtn
                                title={'Show Fact'}
                                link={`/fact?type=${selected}&number=${chosenNumber}`}
                            />
                        </AnimateLinkBtn>
                    </>
                ) : ( 
                    <>
                        <Date day={day} month={month} setDay={setDay} setMonth={setMonth} isRandom={isRandom} setIsRandom={setIsRandom} randomDay={randomDay} setRandomDay={setRandomDay} randomMonth={randomMonth} setRandomMonth={setRandomMonth} />
                        <AnimateLinkBtn show={isRandom ? (randomDay && randomMonth) : (day && month)}>
                             <LinkBtn
                                 title={'Show Fact'}
                                 link={`/fact?type=date&day=${isRandom ? randomDay : day}&month=${isRandom ? randomMonth : month}`}
                             />
                        </AnimateLinkBtn>
                    </>
                )} 
            </div>
        </div>
    );
}

export default HomePage;