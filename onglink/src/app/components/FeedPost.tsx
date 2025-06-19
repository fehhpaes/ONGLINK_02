"use client";
import React, { FC } from "react";
import Image from "next/image";
import MuxnLogo1 from "@/src/app/img/MUXN_logo1.png";

interface Post {
  title: string;
  message: string;
  image?: File | null;
}

interface FeedPostProps {
  post: Post;
}

const FeedPost: FC<FeedPostProps> = ({ post }) => {
  const imageURL = post.image ? URL.createObjectURL(post.image) : null;

  return (
    <div className="feed-item mb-3 d-flex align-items-start">
      {/* Avatar */}
      <div className="avatar avatar-xs me-2">
        <a href="#">
          <Image
            className="avatar-img rounded-circle"
            src={MuxnLogo1}
            alt="Avatar"
            height={60}
            width={60}
          />
        </a>
      </div>
      {/* Conteúdo da Postagem */}
      <div className="feed-content">
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        {imageURL && (
          <img
            src={imageURL}
            alt="Imagem da publicação"
            style={{ maxWidth: "100%", marginTop: 8 }}
          />
        )}
      </div>
    </div>
  );
};

export default FeedPost;