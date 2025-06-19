// FeedPage.tsx
"use client";
import React, { useState } from "react";
import PublicarForm from "@/src/app/components/PublicarForm";
import FeedPost from "@/src/app/components/FeedPost";

interface Post {
  title: string;
  message: string;
}
interface FeedPostProps {
  post: Post;
}


const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  // Definição da função addPost no mesmo componente
  const addPost = (post: Post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <div className="container-fluid col-12 vstack gap-4 p-0">
      <div id="subdiv_publicar" className="p-3">
        
        {/* Passamos addPost para o PublishForm como prop onPublish */}
        <PublicarForm onPublish={addPost} />
      </div>
      <div className="mt-4">
        {posts.length === 0 ? (
          <p className="text-center">Nenhuma publicação ainda.</p>
        ) : (
          posts.map((post, index) => <FeedPost key={index} post={post} />)
        )}
         
      </div>
    </div>
  );
};

export default FeedPage;