import './Footer.css';
import { ReactComponent as Brand } from '../../assets/marca_registrada.svg';


const Footer = () => {
  return(
    <footer className="rodape">
      <Brand />

      Developed by Greg.
    </footer>
  )
}

export default Footer;