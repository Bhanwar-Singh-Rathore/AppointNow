import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
`;

function Timer({ date, onTimerComplete }) {
  const [timerOver, setTimerOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetDate = new Date(date).getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      setTimerOver(true);
      onTimerComplete(); // Call the callback when the timer is over
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
  }, [date, onTimerComplete]);

  return (
    <TimerWrapper>
      {timerOver ? (
        <button>Timer Over</button>
      ) : (
        <>
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
        </>
      )}
    </TimerWrapper>
  );
}

function YourFormComponent() {
  const [showTimer, setShowTimer] = useState(false);

  const handleFormSubmit = (data) => {
    // Your form submission logic goes here

    // Set the target date for the countdown timer
    const targetDate = new Date(data.date_time).toISOString();

    // Start the countdown timer and show it
    setShowTimer(true);

    // More form submission logic if needed
  };

  return (
    <div>
      <form className="flex-col" onSubmit={handleFormSubmit}>
        {/* Form fields go here */}
        {/* ...

        <input type="text" placeholder="Enter name" {...register("user_name")} />
        <input type="text" placeholder="Date time" {...register("date_time")} />
        <input type="text" placeholder="Mobile" {...register("mobile_no")} />
        */}
        <button type="submit" className="bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2">
          Submit
        </button>
      </form>

      {showTimer && (
        <Timer date={targetDate} onTimerComplete={() => setShowTimer(false)} />
      )}
    </div>
  );
}

export default YourFormComponent;
