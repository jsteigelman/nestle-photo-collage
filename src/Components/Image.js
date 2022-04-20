const Image = ({ src, x, y }) => {
  // set image size to random number between 320 and 400 
  const randomNumber = Math.floor(Math.random() * (400 - 340)) + 340
  console.log('random number is: ', randomNumber)

  const imageStyle = {
    left: x + 'px',
    top: y + 'px',
    maxHeight: randomNumber + 'px',
    maxWidth: randomNumber +'px',
    position: 'absolute',
    transform:
      'translate(-50%, -50%) scale(0.5) rotate(' +
      (Math.random() * 20 - 10) +
      'deg)',
  }

  return <img style={imageStyle} src={src} alt='Image of a Nestle product' />
}

export default Image
