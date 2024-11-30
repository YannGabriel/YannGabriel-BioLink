
import DevImage from '../../images/DevImage.svg'; //import da imagem

const Header = () => { //funcção/componente sem necessidade de eventos e parâmetros
  return(
    <header className="container-top">
      <img src={DevImage} alt="Dev Foto" className="devPhoto" />
      <section className="devInfos">
        <h1 className="devName poppins-extrabold">
          <span className="detailLetter">Y</span>ann <span className="detailLetter">G</span>abriel
        </h1>
        <span className="devWork poppins-light">Web Developer</span>
      </section>
    </header>
  )
}

export default Header