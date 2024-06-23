const Circle = ({
    x,
    y,
    backgroundColor
}) => 

    {
        // console.log(bgColor);
    return <div className="circle" style={{
        backgroundColor: backgroundColor,
        top: `${y - 12}px`,
        left: `${x - 12}px`,

    }}></div>
}


const Circles = ( { circles }) => {
    return circles.map(circle => {
        // console.log(circle);
        return <Circle key = {circle.id} {...circle} />
    })
}

export default Circles;