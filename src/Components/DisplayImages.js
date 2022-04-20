const DisplayImages = ({ images }) => {

  const startStyle = {
    alignItems: 'center',
    display: 'flex',
    fontSize: '30px',
    height: '100vh',
    justifyContent: 'center',

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
