// import React, { useState, useEffect } from 'react';
// import './CountdownTimer.css'; 

// const CountdownTimer = () => {
//   const [remainingTime, setRemainingTime] = useState(24 * 60 * 60); // Initial time in seconds

//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       setRemainingTime(prevTime => prevTime - 1);
//     }, 1000);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(timerInterval);
//   }, []);

//   const formatTime = (timeInSeconds) => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   return (
//     <div className="countdown-timer flex-col">
//         <p>Coming Soon</p>
//       <div className="timer">{formatTime(remainingTime)}</div>
//     </div>
//   );
// };

// export default CountdownTimer;
