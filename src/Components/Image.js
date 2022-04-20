const Image = ({ src, x, y, size }) => {
  // set image size to random number between 320 and 400 
  // const randomNumber = Math.floor(Math.random() * (400 - 340)) + 340
  // console.log('random number is: ', randomNumber)

  // set random image size by size label
  const small = Math.floor(Math.random() * (350 - 300)) + 300
  const medium = Math.floor(Math.random() * (400 - 350)) + 350
  const large = Math.floor(Math.random() * (500 - 450)) + 450
  const xLarge = Math.floor(Math.random() * (700 - 650)) + 650

  // set image size
  let imageSize = 0
  if (size === 's') {
    imageSize = small
  } else if (size === 'm') {
    imageSize = medium
  } else if (size === 'l') {
    imageSize = large
  } else if (size === 'xl') {
    imageSize = xLarge
  }
  console.log('Image size: ', imageSize)

  const imageStyle = {
    left: x + 'px',
    top: y + 'px',
    maxHeight: imageSize + 'px',
    maxWidth: imageSize +'px',
    position: 'absolute',
    transform:
      'translate(-50%, -50%) scale(0.5) rotate(' +
      (Math.random() * 20 - 10) +
      'deg)',
  }

  return <img style={imageStyle} src={src} alt='Image of a Nestle product' />
}

export default Image
