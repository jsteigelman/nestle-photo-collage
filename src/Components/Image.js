
const Image = ({src, x, y}) => {

    const imageStyle = {
        left: x + 'px',
        top: y + 'px',
        maxHeight: '300px',
        maxWidth: '600px',
        position: 'absolute',
        transform: 'translate(-50%, -50%) scale(0.5)'   
    }

    return (
        <img style={imageStyle} src={src} alt="Image of a Nestle product"/>
    )
}

export default Image