const Image = ({ src, x, y }) => {
  const imageStyle = {
    left: x + 'px',
    top: y + 'px',
    maxHeight: '300px',
    maxWidth: '600px',
    position: 'absolute',
    transform:
      'translate(-50%, -50%) scale(0.5) rotate(' +
      (Math.random() * 20 - 10) +
      'deg)',
  }

  return (
    <img
      className='productImage'
      style={imageStyle}
      src={src}
      alt='Image of a Nestle product'
    />
  )
}

export default Image
