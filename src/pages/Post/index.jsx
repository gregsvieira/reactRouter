import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import './Post.css';
import PostPattern from '../../components/PostPattern';
import PostCard from '../../components/PostCard';
import ScrollToTop from '../../components/ScrollToTop';
import posts from '../../json/posts.json';
import NotFound from "../NotFound";
import { Routes, Route } from 'react-router-dom';
import DefaultPage from '../DefaultPage';


const Post = () => {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  })

  if(!post){
    return <NotFound />
  }

  const postsRecomended = posts
        .filter((post)=> post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

  return (
      <>
        <Routes>
          <Route path='*' element={<DefaultPage />} >
          <Route index element={
            <PostPattern
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}>
              <div styles="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
              </div>
            <h2 className="tituloOutrosPosts">
              Outros posts que você pode gostar:
            </h2>

            <ul className="postsRecomendados">
              {postsRecomended.map((post) => (
                <li key={post.id}>
                  <PostCard post={post} />
                </li>
              ) )}
            </ul>

            </PostPattern>
          } />
        </Route>
      </Routes>
      </>
  )
}

export default Post;