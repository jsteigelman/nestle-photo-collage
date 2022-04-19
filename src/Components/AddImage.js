import List from './List'
import Image from './Image'

const AddImage = () => {

    let count = 0

    const handleLocation = (x, y) => {
        const nextImage = <Image src={List[count]} x={x} y={y} />
        return nextImage
    }

    return (
        <div>
            {handleLocation(100,100)}
        </div>

    )
}

export default AddImage