import './Banner.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="apresntacao">
        <h1 className="titulo">
          Hello World!
        </h1>

        <p className="paragrafo">
          Boas vindas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere expedita, vero nam excepturi, dolorem fugit porro ex consequuntur nemo illo eligendi repellat eaque, error accusantium quam nesciunt deleniti asperiores in.
        </p>
      </div>
      <div className="imagens">
        <img
          className="circuloColorido"
          src={circuloColorido}
          aria-hidden="true"
        />

        <img 
          className="minhaFoto"
          src={minhaFoto}
          alt="photo of person"
        />
      </div>
    </div>
  )
}

export default Banner;