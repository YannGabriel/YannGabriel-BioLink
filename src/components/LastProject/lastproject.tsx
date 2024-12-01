

import Project from '../../images/BrazilianGrillHouse.svg';

const LastProject = () =>{
  return(
    <a href="https://yanngabriel.github.io/Brazilian-GrillHouse" target='_blank' className="ProjectTarget">
      <div className="LastProject">
        <h2 className="lastName poppins-bold">Ultimo</h2>
        <h3 className="projectTitle poppins-extralight ">Projeto</h3>
        <img src={Project} alt="Imagem Projeto" className='ProjectImage'/>
        <h2 className="projectName poppins-semibold">Brazilian Grill House</h2>
      </div>
    </a>
  )
}

export default LastProject