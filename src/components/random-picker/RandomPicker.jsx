import { motion } from 'framer-motion';
import './randomPicker.css';

export default function RandomPicker({number, setNumber,setIsRandom,isRandom , max}) {

  const pickRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * max) + 1;
    setNumber(randomNum);
    if (!isRandom) {
      setIsRandom(true)  
    }
  };

  const clearNumber = () => {
    setNumber(null);
    setIsRandom(false)
  };

  const buttonWidth = number === null ? 100 : 150;

  return (
    <div className="random-number-container">
      <motion.button
        className="random-number-btn"
        onClick={pickRandomNumber}
        animate={{ width: buttonWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ minWidth: 100 }}
      >
        {number === null ? 'Random' : 'Generate Again'}
      </motion.button>

      <motion.div
        className="random-number-display-wrapper"
        animate={number !== null ? "visible" : "hidden"}
        initial="hidden"
        variants={{
          visible: { opacity: 1, visibility: 'visible', maxHeight: 100, marginTop: 20 },
          hidden: { opacity: 0, visibility: 'hidden', maxHeight: 0, marginTop: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: 'hidden', position: 'relative' }}
      >
        <p className="random-number-display">{number}</p>
        <button className="clear-btn" onClick={clearNumber} aria-label="Очистить число">
          &times;
        </button>
      </motion.div>
    </div>
  );
}
