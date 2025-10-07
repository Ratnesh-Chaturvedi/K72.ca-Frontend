import React, { useState, useEffect } from 'react';

const DATE = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 className='font-[font1] text-xl'>MontReal</h2>
      <p>{currentTime.toLocaleString()}</p>
    </div>
  );
};

export default DATE;
