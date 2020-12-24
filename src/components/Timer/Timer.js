/**
 * Author : rajansingh
 * Created On : 24/12/20
 */
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

function Timer(props) {
    const {
        duration = 15, timeoutFn = () => {
        }
    } = props;
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        // exit when we reach 0
        if (!timeLeft) {
            timeoutFn()
            return;
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    return <span className='timer'>Time: {timeLeft}s / {duration}s</span>;
}

Timer.propTypes = {
    duration: PropTypes.number,
    timeoutFn: PropTypes.func,
};

export default Timer;
