"use client";
import NextImage from "next/image";
import React, { useRef, useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedCarousel from "@/src/app/components/carrousel/carousel";
import Arara from "@/src/app/img/arara.jpeg";
import AraraAzul from "@/src/app/img/arara_azul.jpeg";
import MuxnLogo1 from "@/src/app/img/MUXN_logo1.png";
import Capivara from "@/src/app/img/capivara.jpeg";
import Ceu from "@/src/app/img/ceu.jpeg";
import Mico from "@/src/app/img/mico.jpeg";
import Tucano from "@/src/app/img/tucano.jpeg";
import logo_instagram from "@/src/app/img/icons/instagram_6422200.png";
import logo_twitter from "@/src/app/img/icons/twitter_5968830.png";
import logo_facebook from "@/src/app/img/icons/social_12942738.png";
// import Button from '@/src/app/components/button/button';
import { Button, Image, Alert } from "react-bootstrap";
import { useRouter } from "next/navigation";
import UploadButton from "@/src/app/components/button/UploadButton";
import ConfirmationButton from "@/src/app/components/button/ConfirmationButton";
import "@/src/app/CSS/apoio.css";
import { Router } from "next/router";

export default function Apoio() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showSucesso, setShowSucesso] = useState(false);

  const handleArquivoSelecionado = (arquivo: File) => {
    setFile(arquivo);
    if (arquivo.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(arquivo));
    }
    // Aqui você decide: salvar no estado, enviar pra API, validar, etc.
  };
  const limparPreview = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const confirmaArquivoSelecionado = (novoArquivo: File) => {
    setFile(novoArquivo);
    if (novoArquivo.type.startsWith("image/")) {
      const url = URL.createObjectURL(novoArquivo);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const confirmarEnvio = () => {
    if (!file) return;
    // limpa o preview e o arquivo aqui
    setFile(null);
    setPreviewUrl(null);
    setShowSucesso(true); // se quiser exibir mensagem
    setTimeout(() => setShowSucesso(false), 3000);
  };

  const handleArquivo = (file: File) => {
    console.log("Arquivo recebido:", file.name);
  };

  return (
    <main className="bg-body-secondary p-2">
      {/* <!--Main-->  */}
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="offcanvas-body d-block px-2 px-lg-0">
              <div className="card overflow-hidden">
                <div className="h-50px">
                  <div className="card-body pt-0 bg-success-subtle">
                    <div className="text-center">
                      <div className="avatar avatar-lg mt-n5 mb-3">
                        <a href="#!">
                          {" "}
                          <NextImage
                            className="avatar-img rounded-circle border d-inline"
                            src={MuxnLogo1}
                            alt="logo_muxn"
                            width={100}
                            height={100}
                          />
                        </a>
                      </div>

                      <h5 className="mb-0"> MUXN </h5>
                      <small>Tecnologia</small>
                      <p className="mt-3">
                        Por um planeta melhor através da tecnologia.{" "}
                      </p>

                      <div className="hstack gap-2 gap-xl-3 justify-content-center">
                        <div>
                          <h6 className="mb-0">3</h6>
                          <small>Projetos Apoiados</small>
                        </div>
                      </div>

                      <div>
                        <small> Contato +55 (15) 3333-3333</small>
                      </div>
                      <div>
                        <small> contato@muxn.com.br</small>
                      </div>
                      <div>
                        <ul className="list-unstyled d-flex justify-content-center">
                          <li className="">
                            <a
                              className="link-body-emphasis"
                              href="https://x.com/?lang=pt-br"
                            >
                              <NextImage
                                src={logo_twitter}
                                alt=""
                                className="bi"
                                width={24}
                                height={24}
                              />
                            </a>
                          </li>
                          <li className="ms-3">
                            <a
                              className="link-body-emphasis"
                              href="https://www.instagram.com/"
                            >
                              <NextImage
                                src={logo_instagram}
                                alt=""
                                className="bi"
                                width={24}
                                height={24}
                              ></NextImage>
                            </a>
                          </li>
                          <li className="ms-3">
                            <a
                              className="link-body-emphasis"
                              href="https://www.facebook.com/"
                            >
                              <NextImage
                                src={logo_facebook}
                                alt=""
                                className="bi"
                                width={24}
                                height={24}
                              ></NextImage>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-lg-6 vstack gap-4">
            <div className="bg-success p-2 ">
              {/*FIM DO MENU LATERAL*/}
              <div className="d-flex mt-4 justify-content-center">
                <h1>OBRIGADO POR APOIAR ESSA CAMPANHA</h1>
              </div>
              {/* <!-- LOGO/IMAGEM --> */}
<div className="d-flex align-items-center justify-content-start flex-wrap p-3">
  {/* Box do avatar e informações */}

              <div className="highlight-box d-flex justify-content-star flex-wrap p-3">
                <div className="avatar-container">
                  <NextImage
                    className="avatar-img rounded-circle"
                    src={Arara}
                    alt="Avatar"
                    height={100}
                    width={100}
                  />
                </div>

                <div className="info-container ms-3">
                  <h2> Ambiental Force </h2>
                  <div>
                    <small> Contato +55 (15) 3333-3333</small>
                  </div>
                  <div>
                    <small> contato@contato.com.br</small>
                  </div>
                  <div>
                    <ul className="list-unstyled d-flex ">
                      <li className="">
                        <a
                          className="link-body-emphasis"
                          href="https://x.com/?lang=pt-br"
                        >
                          <NextImage
                            src={logo_twitter}
                            alt=""
                            className="bi"
                            width={24}
                            height={24}
                          />
                        </a>
                      </li>
                      <li className="ms-3">
                        <a
                          className="link-body-emphasis"
                          href="https://www.instagram.com/"
                        >
                          <NextImage
                            src={logo_instagram}
                            alt=""
                            className="bi"
                            width={24}
                            height={24}
                          ></NextImage>
                        </a>
                      </li>
                      <li className="ms-3">
                        <a
                          className="link-body-emphasis"
                          href="https://www.facebook.com/"
                        >
                          <NextImage
                            src={logo_facebook}
                            alt=""
                            className="bi"
                            width={24}
                            height={24}
                          ></NextImage>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-body flex-grow-1 justify-content-center ms-5">
                <h4>Já realizou seu apoio?</h4>

                <div>
                  <UploadButton
                    onFileSelect={confirmaArquivoSelecionado}
                    label="Selecionar Documento"
                  />
                  {previewUrl && (
                    <div
                      style={{
                        marginTop: "12px",
                        position: "relative",
                        width: "200px",
                        height: "200px",
                      }}
                    >
                      <Image
                        src={previewUrl}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  )}

                  <ConfirmationButton
                    onConfirm={confirmarEnvio}
                    isFileReady={!!file}
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
