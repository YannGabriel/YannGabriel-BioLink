import github from "../../images/mediaIcons/github.svg";
import whatsapp from "../../images/whatsapp.svg";
import linkedin from "../../images/mediaIcons/Linkedin.png";
import mail from "../../images/mediaIcons/mail.svg";

const MediaGallery = () =>{
  const imagens = [
    {id: 1, src: github, alt: 'github', link: 'https://github.com/YannGabriel'},
    {id: 2, src: whatsapp, alt: 'whatsapp', link: "https://wa.me/5511993125933?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."},
    {id: 3, src: linkedin, alt: 'linkedin', link: "https://www.linkedin.com/in/yann-gabriel-dev"},
    {id: 4, src: mail, alt: 'mail', link: "mailto:yanngabrieldev@gmail.com?subject=Primeiro%20Contato&body=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."}
  ]

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