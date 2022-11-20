import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import '../../Styles/components/gallery.scss'

function Gallery({ images, loop }) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (images) {
            const process = setInterval(() => {
                setIndex((index) => (index + 1) % images.length)
            }, loop)

            return () => {
                clearInterval(process)
            }
        }
    }, [images, loop])
    return (
        images && <div className="gallery">
            <div className='gallery-left' onClick={() => setIndex(() => index > 0 ? index - 1 : images.length - 1)}> </div>
            <div className='gallery-right' onClick={() => setIndex(() => (index + 1) % images.length)}> </div>
            <div className='gallery-count'>{index + 1}/{images.length}  </div>
            <img src={images[index]} className='gallery-img' alt='no-pics'></img>
        </div>
    )
}

Gallery.protoType = {
    images: PropTypes.array.isRequired,
    loop: PropTypes.number,
}

export default Gallery