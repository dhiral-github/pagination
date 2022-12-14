import React from 'react';

const Posts = ({ posts, loading }) => {
  
  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className='list-group mb-4'>
      {
        posts.map(i =>
          // console.log('posts--->>>>>',i);
          <li key={i.id} className='list-group-item'>
            {i.title}
          </li>
        )
      }
    </ul>
  )
}


export default Posts;