"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import MuxnLogo1 from "@/src/app/img/MUXN_logo1.png"
import UploadButton from "./button/UploadButton";

interface PublicarFormProps {
  onPublish: (post: { title: string; message: string }) => void;
}

const PublicarForm: FC<PublicarFormProps> = ({ onPublish }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && message.trim()) {
      onPublish({ title, message });
      setTitle("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handlePost} className="mb-4">
        <div className="container-fluid col-12 vstack gap-4 p-0">
    <div className="d-flex mt-3 mb-3">
              
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
      <div className="container mt-0">
    <div className="mb-2">
        <textarea
          className="form-control"
          rows={1}
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
      </div>
      <div className="mb-2">
        <textarea
          className="form-control"
          rows={5}
          placeholder="Editar publicação"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
        />
      </div>
      </div>
      </div>
      
      </div>
      <div id="div_botoes_publi" className=" align-items-center">
      <button type="submit" className="btn btn-success" title="Enviar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-send-check"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
        </svg>
        </button>
       
      </div>      
    </form>
  );
};

export default PublicarForm;
