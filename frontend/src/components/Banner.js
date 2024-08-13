import React, { useState, useEffect } from 'react';

function Banner({ description, timer, link, isBannerVisible, setIsBannerVisible }) {
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

    const toggleBannerVisibility = () => {
        setIsBannerVisible(!isBannerVisible);
    };

    if (isExpired) {
        return null; // Return nothing to make the banner disappear
    }

    return (
        <div className="banner">
            {isBannerVisible && (
                <div>
                    <p className="banner-description">{description}</p>
                    <p className="banner-timer">Time left: {timeLeft} seconds</p>
                    <a href={link} className="banner-link" target="_blank" rel="noopener noreferrer">
                        Visit Link
                    </a>
                </div>
            )}

            <button onClick={toggleBannerVisibility} className="banner-toggle-button">
                {isBannerVisible ? 'Hide Banner' : 'Show Banner'}
            </button>
        </div>
    );
}

export default Banner;
