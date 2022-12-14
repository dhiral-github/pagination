// https://jsonplaceholder.typicode.com/posts

import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i <= (totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination' >
        {
          pageNumbers.map(number => (
            <li key={number} className='page-item' >
              <a href='!#'
                style={{
                  backgroundColor: '#f5eeee',
                  borderColor: 'black',
                  borderRadius: '25px'
                }}
                onClick={() => paginate(number)}
                className='page-link'>
                {number}
              </a>
            </li>
          ))
        }
      </ul>

    </nav>
  )
}

export default Pagination;