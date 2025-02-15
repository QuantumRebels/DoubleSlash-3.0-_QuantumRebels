import { useState, useEffect } from "react";

export const useTabTimeTracker = () => {
    const [totalTime, setTotalTime] = useState(0);
    let startTime = Date.now();

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                startTime = Date.now();
            } else {
                setTotalTime(prev => prev + (Date.now() - startTime));
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return { totalTime, setTotalTime };
};