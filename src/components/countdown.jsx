import React, { useState, useEffect } from "react";
import "./countdown.css";
import ReactAudioPlayer from "react-audio-player";

// Array of quotes
const quotes = [
  "Love is the only reality, and it’s not a mere sentiment. It’s the ultimate truth.",
  "You make my heart smile.",
  "Every day with you is a gift, I’m so lucky to spend this day with you.",
  "To love and be loved is to feel the sun from both sides.",
  "You’re the reason I smile every day.",
  "The best thing to hold onto in life is each other.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are my today and all of my tomorrows."
];

const Countdown = () => {
  // Get a random quote from the array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Target date logic: 1 month from today
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);
  const targetTime = targetDate.getTime();

  // State to hold remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate time remaining
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    let time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return time;
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="countdown-container">
        <h1 className="countdown-title">Countdown to Your Special Day❤!</h1>
       <br>
       </br> <h2>01.01.2025</h2>

        <div className="quote-container">
          <p className="quote">{randomQuote}</p>
        </div>

        <div className="countdown-digits">
          <div className="countdown-box">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="heart-container">
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
        </div>
<br></br>
        {/* Audio Player */}
      
      </div>
    </>
  );
};

export default Countdown;
