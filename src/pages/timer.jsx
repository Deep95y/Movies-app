import { useState, useEffect } from "react";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    const incrementSecond = () => {
        if (seconds === 59) {
            return;
        }

        setSeconds((prev) => prev + 1);
    };

    const incrementMinute = () => {
        if (seconds === 59) {
            return;
        }

        setMinutes((prev) => prev + 1);
    };

    const incrementHour = () => {
        setHours((prev) => prev + 1);
    };

    const decrementSecond = () => {
        if (seconds === 0) {
            return;
        }

        setSeconds((prev) => prev - 1);
    };

    const decrementMinute = () => {
        if (minutes === 0) {
            return;
        }

        setMinutes((prev) => prev - 1);
    };

    const decrementHour = () => {
        if (hours === 0) {
            return;
        }

        setHours((prev) => prev - 1);
    };

    useEffect(() => {
        const convertedTime = seconds + minutes * 60 + hours * 60 * 60;
        setTimeInSeconds(convertedTime);
    }, [seconds, minutes, hours]);

    // todos
    // look for the fix for negative value in timer package when i stop the timer
    // conditional routing on register

    return (
        <div
            style={{
                width: "45vw",
                height: "45vh",
                background: "#1E2343",
                borderRadius: "12px",
                display: "flex",
                boxSizing: "border-box",
                padding: "12px",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginBottom:"70px",
                marginLeft:"80px"
                
            }}
        >
            {" "}
            <div>
                {" "}
                <CountdownCircleTimer
                    isPlaying={isTimerStarted}
                    duration={timeInSeconds}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => (
                        <span style={{ fontSize: "50px", color: "white" }}>
                            {remainingTime}
                        </span>
                    )}
                </CountdownCircleTimer>
            </div>{" "}
            <div
                style={{
                    width: "35vw",
                    textAlign: "center",
                }}
            >
                {" "}
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        fontSize: "2rem",
                        justifyContent: "space-evenly",
                    }}
                >
                    {" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p style={{color:"white"}}>Hours</p>{" "}
                        <img
                            style={{
                                width: "30px",
                                height: "30px",
                            }}
                            onClick={incrementHour}
                            src={"public/uparrow.png"}
                            alt=""
                        />{" "}
                        <p style={{color:"white"}}> {hours}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementHour}
                            src={"public/deepdown.png"}
                            alt=""
                        />{" "}
                    </div>{" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p style={{color:"white"}}>Minutes</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={incrementMinute}
                            src={"public/uparrow.png"}
                            alt=""
                        />{" "}
                        <p style={{color:"white"}}> {minutes}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementMinute}
                            src={"public/deepdown.png"}
                            alt=""
                        />{" "}
                    </div>{" "}
                    <div
                        style={{
                            textAlign: "center",
                            padding: "6px",
                        }}
                    >
                        {" "}
                        <p style={{color:"white"}}>Seconds</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={incrementSecond}
                            src={"public/uparrow.png"}
                            alt=""
                        />{" "}
                        <p style={{color:"white"}}> {seconds}</p>{" "}
                        <img
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            onClick={decrementSecond}
                            src={"public/deepdown.png"}
                            alt=""
                        />{" "}
                    </div>{" "}
                </div>{" "}
                <div
                    onClick={() => setIsTimerStarted(!isTimerStarted)}
                    style={{
                        background: "#FF6A6A",
                        borderRadius: "15px",
                        paddingTop:'2rem',
                        color: "white",
                        textAlign: "center",
                        cursor: "pointer",
                        height:"60px",
                        width:"500px",
                        margin:"auto",
                        fontSize:'40px'
                    }}
                >
                    {" "}
                    {isTimerStarted ? (
                        <p
                            onClick={() => {
                                // setHours(0);
                                // setMinutes(0);
                                // setSeconds(0);
                                // setTimeInSeconds(0);
                            }}
                        >
                            Pause
                        </p>
                    ) : (
                        <div style={{}}>Start</div>
                    )}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default Timer;