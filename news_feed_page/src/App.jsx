import React, { useState } from "react";
import BlogPost from './components/BlogPost';

const App = () => {
  const blogPosts = [
    {
      title: "How To Learn Code",
      author: " Brian",
      category: " Technology",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "HTML for Beginners",
      author: " Tovi",
      category: " Technology",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "Fertilizers for Grass",
      author: " Bukenya",
      category: " Farming",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "Home Schooling",
      author: " Susan",
      category: " Education",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "Cars and Alarms",
      author: " Bosco",
      category: " Mechanics",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "How To CSS",
      author: " Brian",
      category: " Technology",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "Teachers and Children",
      author: " Regina",
      category: " Education",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
      title: "How To Learn Save",
      author: " Suuna",
      category: " Finance",
      context:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    // console.log('clicked')
    e.preventDefault();
    const results = blogPosts.filter(
      (post) =>
        post.author.toLowerCase().includes(searchInput.toLowerCase()) ||
        post.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPosts(results);
  };

  return (
    <div>
      <div>
        <h1>Ministerial News Feed</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            id="searchBar"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input type="submit" value="Search" id="searchButton" />
        </form>
      </div>
      <div className="storyBoard">
        {filteredPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            author={post.author}
            category={post.category}
            context={post.context}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
