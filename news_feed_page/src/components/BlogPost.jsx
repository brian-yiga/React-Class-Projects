import { useState } from "react";
import React from 'react'

const BlogPost = ({title, author, context, category}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const changeRead = () => {
        setIsExpanded(!isExpanded)
    }

  return (
    <div className='blog'>
        <p id='title'>{title}</p>
        <p id='context'>{context}
        {
            isExpanded ? context : `${context.substring(0, 100)}...`
        }</p>
        <p id='author'>Written By;{author}</p>
        <p id='category'>Category;{category}</p>
        <button onClick={changeRead} id="readMore">
            {
                isExpanded ? 'Read Less' : 'Read More'
            }
        </button>
    </div>
  )
}

export default BlogPost