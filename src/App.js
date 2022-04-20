import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import List from './Components/List'
import DisplayImages from './Components/DisplayImages'

function App() {
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0)

  const handleAddImage = async () => {
    console.log('Handle add image is running')
    let newArray = images.slice()
    newArray.push(List[count])
    await setImages(newArray)

    const availableImageFiles = List.length

    console.log('Count: ', count)
    console.log('Available image files: ', availableImageFiles)
    console.log('Images length: ', images.length)

    setCount(count + 1)
    console.log('Count: ', count)
    console.log('Images: ', images)
    if (count === availableImageFiles - 1) {
      console.log('count is equal to avail image files!')
      setCount(0)
    }

    // console.log('handle add image is running!')
    // let x = 100
    // let y = 100

    // console.log('test of list count: ', List[count])

    // const nextImage = <Image key={count} src={List[count]} x={x} y={y} />
    // const arrayTest =
    //   ((<Image key={count} src={List[count]} x={100} y={100} />),
    //   (<Image key={count + 1} src={List[count]} x={200} y={200} />))

    // count += 1
    // let list = images
    // // list.push(nextImage)
    // console.log('List is currently: ', list)
    // // setImages(list)
    // setImages(arrayTest)
  }

  return (
    <div className='App' onClick={handleAddImage}>
      <DisplayImages images={images} />
    </div>
  )
}

export default App
