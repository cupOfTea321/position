import React, { useEffect } from "react";

const ScrollLock = () => {
    useEffect(() => {
        const handleTouchMove = (e) => {
            e.preventDefault();
        };

        document.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        });

        return () => {
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return null;
};

export default ScrollLock;
