import PostCard from "../../components/PostCard";
import './Home.css';

import posts from '../../json/posts.json';

const Home = () => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Home;