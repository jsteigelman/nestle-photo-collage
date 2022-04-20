const DisplayImages = ({ images }) => {
  const imagesArray = images.map((image) => image)
  const result = images.length === 0 ? '' : imagesArray

  return <div>{result}</div>
}

export default DisplayImages
