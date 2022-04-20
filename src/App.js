import { useState } from 'react'
import './App.css'
import List from './Components/List'
import Image from './Components/Image'
import DisplayImages from './Components/DisplayImages'

function App() {
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0)
  const [backgroundCount, setBackgroundCount] = useState(0.5)

  const backgroundStyle = {
    backgroundColor: 'rgba(255, 0, 255, ' + backgroundCount + ')',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  }

  const handleAddImage = (event) => {

    // dev testing
    console.log(`The coords are ${event.clientX}, ${event.clientY}`)
    console.log('Handle add image is running')

    // create new image component
    const imageSrc = List[count]
    const newImage = <Image key={Math.floor(Math.random() * 500)} src={imageSrc} x={event.clientX} y={event.clientY} />

    // save image component to list
    let newArray = images.slice()
    newArray.push(newImage)
    setImages(newArray)
    const increaseAlpha = backgroundCount + 0.05
    setBackgroundCount(increaseAlpha)
    console.log('backgroundcount: ', backgroundCount)

    // loop through list of available image files by incrementing count
    const availableImageFiles = List.length
    setCount(count + 1)
    if (count === availableImageFiles - 1) {
      setCount(0)
    }
  }

  return (
    <div className='App' onMouseDown={handleAddImage} style={backgroundStyle}>
      <DisplayImages images={images} />
    </div>
  )
}

export default App
