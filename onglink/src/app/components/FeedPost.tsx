"use client";
import React, { FC } from "react";
import Image from "next/image";
import MuxnLogo1 from "@/src/app/img/MUXN_logo1.png"


interface Post {
  title: string;
  message: string;
}

interface FeedPostProps {
  post: Post;
}

const FeedPost: FC<FeedPostProps> = ({ post }) => {
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
      <div>
        <h3>{post.title}</h3>
        <p>{post.message}</p>
        <div className="b-example-divider"></div>
      </div>
       
    </div>
  );
};

export default FeedPost;

