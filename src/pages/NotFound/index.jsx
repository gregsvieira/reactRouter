import './NotFound.css';
import MainButton from '../../components/MainButton';
import erro404 from '../../assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
  <>
      <div className="conteudoContainer">
        <span className="texto404">
          404
        </span>

        <h1 className="titulo">
          Ops! Page not found!
        </h1>

        <p className="paragrafo">
          Tem certeza que era isso que estava procurando?
        </p>

        <p className="paragrafo">
        Volte para a página inicial.
        </p>

        <div className="botaoContainer"
          onClick={()=> navigate(-1)}
          >
          <MainButton size='lg'>
            Voltar
          </MainButton>
        </div>

        <img className="imagemCachorro" 
        src={erro404}
        alt='Cachorro de óculos e vestido como ser humano'
        />
        
      </div>

      <div className="espacoEmBranco">
      </div>
  </>
  )
}

export default NotFound;