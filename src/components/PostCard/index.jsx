import { Link } from 'react-router-dom';
import MainButton from '../MainButton';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} >
      <div className="post">
        <img
          className="capa"
          src={`/assets/posts/${post.id}/capa.png`}
          alt="image of post"
        />

        <h2 className="titulo">{post.titulo}</h2>

        <MainButton>
          Ler
        </MainButton>
        
      </div>
    </Link>
  )
}

export default PostCard;