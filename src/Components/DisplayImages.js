import Image from './Image'

const DisplayImages = ({ images }) => {

  const tempKey = Math.floor(Math.random() * 500)
  console.log('tempKey is: ', tempKey)
  console.log('Display images is running')
  console.log('Images hook length is: ', images.length)
  console.log('Image files in images hook: ', images, '\n')

  const imagesArray = images.map((image) => <Image key={Math.floor(Math.random() * 500)} src={image} x='200' y='200' />)

  const result = images.length > 0 ? imagesArray : ''
  return <div>{result}</div>
}

export default DisplayImages