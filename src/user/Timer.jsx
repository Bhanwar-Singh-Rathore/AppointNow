import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
`;

function Timer({ date }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetDate = new Date(date).getTime(); // Convert the date string to a timestamp
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]); // Listen for changes in the date prop

  return (
    <TimerWrapper>
      <div>
        <span>{timeRemaining.days}</span> days
      </div>
      <div>
        <span>{timeRemaining.hours}</span> hours
      </div>
      <div>
        <span>{timeRemaining.minutes}</span> minutes
      </div>
      <div>
        <span>{timeRemaining.seconds}</span> seconds
      </div>
    </TimerWrapper>
  );
}

export default Timer;
