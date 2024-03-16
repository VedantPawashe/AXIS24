import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ limit, speed }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < limit) {
        setCounter(prevCounter => prevCounter + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [counter, limit, speed]);

  return (
    <div style={counterStyles}>
      <motion.h1 style={counterNumber} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {counter}+
      </motion.h1>
    </div>
  );
};

const MultipleCounters = () => {
  return (
    <div style={containerStyles}>
      <div style={counterContainer}>
        <h2 className='text-4xl' style={headerStyles}>Events</h2>
        <Counter limit={35} speed={300} />
      </div>
      <div className='text-4xl' style={counterContainer}>
        <h2 style={headerStyles}>Colleges</h2>
        <Counter limit={200} speed={80} />
      </div>
      <div className='text-4xl' style={counterContainer}>
        <h2 style={headerStyles}>Footfall</h2>
        <Counter limit={2500} speed={0.0001} /> {/* Updated limit by 100 */}
      </div>
    </div>
  );
};

// Styles
const containerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#02050e',
  color: 'white',
};

const counterContainer = {
  margin: '50px',
  padding: '20px 120px',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyles = {
  color: 'white',
};

const counterStyles = {
  display: 'flex',
  alignItems: 'center',
};

const counterNumber = {
  fontSize: '2rem',
  margin: '0',
};

export default MultipleCounters;