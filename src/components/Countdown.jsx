import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Text } from "@chakra-ui/react";

const STATUS = {
    STARTED: 'Started',
}

const INITIAL_COUNT = 3600 //1 hr

export const Countdown = forwardRef((props, ref) => {
    const twoDigits = (num) => String(num).padStart(2, '0')

    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STARTED)

    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

    useImperativeHandle(ref, () => ({
        handleReset() {
            setSecondsRemaining(INITIAL_COUNT);//Reset count
            props.fetchData();//Refresh news
        }
    }));

    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                setSecondsRemaining(INITIAL_COUNT);//Reset count
                props.fetchData();//Refresh news
            }
        },
        status === STATUS.STARTED ? 1000 : null,
        // passing null stops the interval
    )

    function useInterval(callback, delay) {
        const savedCallback = useRef()

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback
        }, [callback])

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current()
            }
            if (delay !== null) {
                let id = setInterval(tick, delay)
                return () => clearInterval(id)
            }
        }, [delay])
    }

    return (

        <Text as="span" fontSize='md'>{twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
            {twoDigits(secondsToDisplay)}</Text>

    )
})

