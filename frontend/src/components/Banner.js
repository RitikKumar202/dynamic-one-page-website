import React, { useState, useEffect } from 'react';

function Banner({ description, timer, link }) {
    const [timeLeft, setTimeLeft] = useState(timer);
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        setTimeLeft(timer);
        setIsExpired(false);
    }, [timer]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0 && !isExpired) {
            setIsExpired(true);
        }
    }, [timeLeft, isExpired]);

    if (isExpired) {
        return (
            <div className="banner banner-expired">
                <p>Banner disappeared</p>
            </div>
        );
    }

    return (
        <div className="banner">
            <p className="banner-description">{description}</p>
            <p className="banner-timer">Time left: {timeLeft} seconds</p>
            <a href={link} className="banner-link" target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
}

export default Banner;