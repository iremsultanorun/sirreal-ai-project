import './Circles.css'
const Circles = () => {
    const circles = [];
    for (let i = 1; i < 13; i++) {
        const opacity = 1000 - (i * 70);
        const size = 10 + (i - 1) * 5;
        circles.push(
            <div key={i} className='circle' style={{ borderColor: `rgba(255, 255, 255,${opacity / 1000})`, width: `${size}rem`, height: `${size}rem` }}></div>
        )
    }

    return (
        <div className='circles-container'>
            <div className='center circles-wrapper'>
                {circles}
            </div>
        </div>
    )
}

export default Circles