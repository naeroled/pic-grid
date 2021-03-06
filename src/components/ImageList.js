import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {

    const images = props.photos.map((photo) => {
        return <ImageCard
            alt={'A pic'}
            onPicSelect={props.onPicSelect}
            key={photo.id}
            photo={photo}
        />
    })

    return (
        <div className='image-list'>{images}</div>
    )
}

export default ImageList;