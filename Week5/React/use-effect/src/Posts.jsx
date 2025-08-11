import React, { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

  useEffect(() => {
    // Mock API URL (you can replace with a real one)
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // Take only first 10 posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: "16px", overflowX: isSmallScreen ? "visible" : "auto", padding: "8px", }}>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            width: isSmallScreen ? "100%" : "200px",
            boxSizing: "border-box",
            borderRadius: "6px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>{post.title}</h4>
          <p style={{ fontSize: "14px", color: "#555" }}>
            {post.body.length > 100
              ? post.body.substring(0, 100) + "..."
              : post.body}
          </p>
        </div>
      ))}
    </div>
  );
}
