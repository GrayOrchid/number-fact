import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './dropdown.css'

export default function Dropdown({selected, setSelected}) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['math','trivia','date'];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container" style={{ position: 'relative' }}>
      <button className="dropdown-btn" onClick={toggleOpen}>
        {selected}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="dropdown-list"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ position: 'absolute', top: '100%', left: 0, background: '#eee', border: '1px solid #ccc', width: 150, zIndex: 1000, padding: 0, margin: 0, listStyle: 'none' }}
          >
            {options.map((option) => (
              <li
                key={option}
                className="dropdown-item"
                onClick={() => selectOption(option)}
                style={{ padding: '8px 12px', cursor: 'pointer' }}
              >
            {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
