import './About.css';
import PostPattern from "../../components/PostPattern";
import fotoCapa from '../../assets/sobre_mim_capa.png';

const About = () => {
  return (
    <PostPattern
      fotoCapa={fotoCapa}
      titulo="about"
    >
      <h3 className="subtitulo">
        Hello, i'm Gregory.
      </h3>

      <p className="paragrafo">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      </p>
      <p className="paragrafo">
        Quisquam, maxime incidunt?
      </p>
      <p className="paragrafo"> 
        Quaerat vel ut laudantium enim architecto, explicabo perspiciatis neque quas quis soluta repellendus harum nemo a optio magni esse.
      </p>
    </PostPattern>
  )
}

export default About;