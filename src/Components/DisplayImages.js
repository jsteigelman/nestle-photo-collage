const DisplayImages = ({ images }) => {

  const startStyle = {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    fontSize: '50px',
    fontWeight: '700',
    height: '100vh',
    justifyContent: 'center',
    textShadow: '1px 1px 1px #0f0f0f',
  }
  const divStyle = {
    display: 'block'
  }
  const imagesArray = images.map((image) => image)
  const result = images.length === 0 ? <p>Click anywhere on the screen!</p> : imagesArray
  const setStyle = images.length === 0 ? startStyle : divStyle

  return <div style={setStyle}>{result}</div>
}

export default DisplayImages
