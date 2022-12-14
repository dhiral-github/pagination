import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, [])
  
  const paginate = (number) => {
    setCurrentpage(number);
  }

  const indexOfLastPost = currentpage * postperpage;
  const indexOfFirstPost = indexOfLastPost - postperpage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mt-5">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postperpage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default App;
