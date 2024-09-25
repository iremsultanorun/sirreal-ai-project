import React from 'react'
import './Circles.css'
const Circles = () => {
    const circles = [];
    for (let i = 1; i < 13; i++) { // A for loop to generate circles from 1 to 13
        const opacity = 1000 - (i * 70); // Calculating the opacity value for the circles
        const size = 10 + (i - 1) * 5; // The size of the circles increasing from small to large
        circles.push( // Adding each created div into the circles array
            <div key={i} className='circle' style={{ borderColor: `rgba(255, 255, 255,${opacity / 1000})`, width: `${size}rem`, height: `${size}rem` }}></div>  // Template literals used to add style properties, and divs with the class 'circle' are created
        )
    }

return (
    <div>
        <div className='center circles-wrapper'>
            {circles}
        </div>
    </div>
)
}

export default Circles