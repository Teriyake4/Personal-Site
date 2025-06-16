import React from "react";

const Curve: React.FC = () => {
    return (
        <div className="w-full overflow-hidden leading-none bg-base/50 backdrop-blur-md">
            <svg
                viewBox= "0 0 100% 100%"
                className="w-full h-screen"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1.2" y2="1">
                        <stop offset="0%" stopColor="#75CFFF" />
                        <stop offset="70%" stopColor="#090F13" />
                    </linearGradient>
                </defs>
            <path
                fill="url(#waveGradient)"
                d="M0.00,49.99 C213.60,216.62 317.44,-93.24 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            />
            </svg>
        </div>
    );
};

export default Curve;