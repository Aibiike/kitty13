import React from 'react';

const Spinner = () => {
    return (
        <div className='mt-60'>
            <svg style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block"}} width="200px">
                <rect x="15" y="30" width="10" height="40" fill="#e15b64">
                    <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
                </rect><rect x="35" y="30" width="10" height="40" fill="#f47e60">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
            </rect><rect x="55" y="30" width="10" height="40" fill="#f8b26a">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
            </rect><rect x="75" y="30" width="10" height="40" fill="#abbd81">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
            </rect>
            </svg>
        </div>
    );
};

export default Spinner;