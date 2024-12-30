

import { useState, useEffect } from "react"

interface Medias{
  name?: string
  id?: number,
  link?: string
}

const MediaGallery = () =>{

  const [medias, setMedias] = useState<Medias[]>([])

  useEffect(() =>{
    fetch("")
  },[])

  return (
    <div className="mediaContent gridLayout">
    {imagens.map((image) =>(
      <a href={image.link} className="MediaTarget" target="blank">
        <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className="image-item" />
      </a>
    ))}
  </div>
  )
}

export default MediaGallery