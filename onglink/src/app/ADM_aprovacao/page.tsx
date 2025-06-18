"use client";

import Header_ADM_aprovacao from "@/src/app/components/header_ADM_aprovacao";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import { ICadastro } from "./ICadastro";
import { Modal, Button } from 'react-bootstrap';

export default function ADM_aprovacao() {
    const [products, setProducts] = useState<ICadastro[]>([]);
    const router = useRouter();
    const [showImageModal, setShowImageModal] = useState(false);
    const [showImageModal2, setShowImageModal2] = useState(false);
    const [showFileModal1, setShowFileModal1] = useState(false);
    const [showFileModal2, setShowFileModal2] = useState(false);
    const [showAprovacaoModal, setShowAprovacaoModal] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    useEffect(() => {
        const listProducts = async() => {
            const response = await axios.get("http://localhost/aprovacao");
            setProducts(response.data);
            console.log(response.data);
        }
        listProducts();
    }, []);

    const handleZoomImage = (imgSrc: string) => {
        setZoomedImage(imgSrc);
    };

    const closeZoom = () => {
        setZoomedImage(null);
    };

    const imageUrls1 = [
        "https://images.pexels.com/photos/29397646/pexels-photo-29397646/free-photo-of-grupo-de-meninas-adolescentes-sorrindo-juntas-dentro-de-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/29395685/pexels-photo-29395685/free-photo-of-recepcao-de-casamento-elegante-com-casal-sorridente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/29416174/pexels-photo-29416174/free-photo-of-camera-digital-olympus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/29437096/pexels-photo-29437096/free-photo-of-um-dia-agradavel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/29382413/pexels-photo-29382413/free-photo-of-jovens-adultos-em-estrutura-de-escalada-de-playground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/29371042/pexels-photo-29371042/free-photo-of-celebracao-de-casamento-tradicional-com-arranjos-florais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    const imageUrls2 = [
        "https://images.pexels.com/photos/28354746/pexels-photo-28354746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3491940/pexels-photo-3491940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4262424/pexels-photo-4262424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];

    return (
        <>
            <Header_ADM_aprovacao/>
            <main>
                <div className="col-12 justify-self-center m-2 p-2" id="div_cont_principal_aprovacao">
                    <h1 className="justify-self-center"> Seja bem vindo, @nome_da_pessoa!</h1>
                    <div className="col-12" id="div_cont_table">
                        <div id="div_tabela_aprovacao">
                            <h4 id="tr_titulo_h4" className="justify-self-center">Aprovação de contas e Denuncias de publicações</h4>
                            <table className="col-12 border-2 border-gray-600 rounded" id="tabela_aprovacao">
                                <thead className="col-12 border-2 border-gray-600 rounded">
                                    
                                    <tr className=" border-2 border-gray-600 rounded" id="tr_conteudo_tabela_aprovacao">
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Nº da Solicitação</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Tipo de Solicitação</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Nome da ONG/Empresa</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Nome do resp. da ONG/Empresa</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Data da Solicitação</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Status</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Obs</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Visualizar</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Aprovação</th>
                                        <th className=" border-2 border-gray-600 rounded m-1 p-1">Nome resp. Aprovação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" border-2 border-gray-600 rounded m-1">
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">0111</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Criar Conta</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">ONGExemplo 1</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Costa Silva</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">16/11/2024</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Negada</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Documentos enviados estão com informações faltantes</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="primary" onClick={() => setShowFileModal1(true)}>
                                                Visualizar
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="secondary" onClick={() => setShowAprovacaoModal(true)}>
                                                Aprovação
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Cláudio Willian Moura Henrique</td>
                                    </tr>
                                    <tr>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">0112</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Reportar Publicação</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">MUNDO.Company</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Cleber Helio de Souza</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">17/11/2024</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Aprovado</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Tudo certo</td>                  
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="primary" onClick={() => setShowImageModal(true)}>
                                                Visualizar
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="secondary" onClick={() => setShowAprovacaoModal(true)}>
                                                Aprovação
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Rafael Sartori da Costa</td>
                                    </tr>
                                    <tr>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">0113</td>                                       <td >Reportar Publicação</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Testes.INC</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Roberto Gomes</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">17/11/2024</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Não Avaliado</td>  
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1"></td>                
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="primary" onClick={() => setShowImageModal2(true)}>
                                                Visualizar
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="secondary" onClick={() => setShowAprovacaoModal(true)}>
                                                Aprovação
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1"></td>
                                    </tr>
                                    <tr className=" border-2 border-gray-600 rounded m-1 p-1">
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">0114</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Criar Conta</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">ONGExemplo 2</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Leonardo da Silva</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">17/11/2024</td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">Em Aprovação</td> 
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1"></td>                 
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="primary" onClick={() => setShowFileModal2(true)}>
                                                Visualizar
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1">
                                            <Button variant="secondary" onClick={() => setShowAprovacaoModal(true)}>
                                                Aprovação
                                            </Button>
                                        </td>
                                        <td className=" border-2 border-gray-600 rounded m-1 p-1"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Modal IMG1 */}
                    <Modal show={showImageModal} onHide={() => setShowImageModal(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Publicação reportada: Ação sobre a diversidade</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                {imageUrls1.map((url, index) => (
                                    <div className="col-6 col-md-4 mb-3" key={index}>
                                        <img 
                                            src={url} 
                                            className="img-fluid rounded zoomable" 
                                            alt={`Imagem ${index + 1}`}
                                            onClick={() => handleZoomImage(url)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-4 mb-3"></div>
                                <div className="col-6 col-md-4 mb-3">
                                    <textarea className="form-control" id="observacoes" name="observacoes" rows={4}>
                                        Primeiro texto de exemplo
                                    </textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowImageModal(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal IMG2 */}
                    <Modal show={showImageModal2} onHide={() => setShowImageModal2(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Publicação reportada: ação sobre diversidade</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                {imageUrls2.map((url, index) => (
                                    <div className="col-6 col-md-4 mb-3" key={index}>
                                        <img 
                                            src={url} 
                                            className="img-fluid rounded zoomable" 
                                            alt={`Imagem ${index + 1}`}
                                            onClick={() => handleZoomImage(url)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-4 mb-3"></div>
                                <div className="col-6 col-md-4 mb-3">
                                    <textarea className="form-control" id="observacoes" name="observacoes" rows={4}>
                                        Segundo texto de exemplo
                                    </textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowImageModal2(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal PDF_1 */}
                    <Modal show={showFileModal1} onHide={() => setShowFileModal1(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Criação de conta ONG: ONGExemplo 1</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <iframe 
                                        src="https://diariooficial.imprensaoficial.com.br/doflash/prototipo/2024/Novembro/04/exec3/pdf/pg_0001.pdf" 
                                        className="pdf-viewer" 
                                        title="PDF"
                                        style={{ width: '100%', height: '500px' }}
                                    ></iframe>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <iframe 
                                        src="https://diariooficial.imprensaoficial.com.br/doflash/prototipo/2024/Novembro/04/municipios/pdf/pg_0001.pdf" 
                                        className="pdf-viewer" 
                                        title="PDF"
                                        style={{ width: '100%', height: '500px' }}
                                    ></iframe>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-4 mb-3"></div>
                                <div className="col-6 col-md-4 mb-3">
                                    <textarea className="form-control" id="observacoes" name="observacoes" rows={4}>
                                        Texto de exemplo
                                    </textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowFileModal1(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal PDF_2 */}
                    <Modal show={showFileModal2} onHide={() => setShowFileModal2(false)} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Criação de conta ONG: ONGExemplo 2</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <iframe 
                                        src="https://www.alunos.diaadia.pr.gov.br/arquivos/File/gremio_estudantil/modelo_ata_reuniao__1.pdf" 
                                        className="pdf-viewer" 
                                        title="PDF"
                                        style={{ width: '100%', height: '500px' }}
                                    ></iframe>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <iframe 
                                        src="https://formularios2.mec.gov.br/images/documentos_pdde/exemplo_ata_campo.pdf" 
                                        className="pdf-viewer" 
                                        title="PDF"
                                        style={{ width: '100%', height: '500px' }}
                                    ></iframe>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-4 mb-3"></div>
                                <div className="col-6 col-md-4 mb-3">
                                    <textarea className="form-control" id="observacoes" name="observacoes" rows={4}>
                                        Texto de exemplo
                                    </textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowFileModal2(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal Aprovações */}
                    <Modal show={showAprovacaoModal} onHide={() => setShowAprovacaoModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aprovação</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <p></p>
                                    <p></p>
                                    <Button variant="success" id="btn_modal_aprovar">
                                        Aprovado
                                    </Button>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <p></p>
                                    <p></p>
                                    <Button variant="danger" id="btn_modal_reprovar">
                                        Negado
                                    </Button>
                                </div>
                                <div className="col-8 col-md-12 mb-3">
                                    <label htmlFor="obs_modal_aprovacao">Observações</label>
                                    <p></p>
                                    <textarea 
                                        className="form-control"
                                        name="obs_modal_aprovacao" 
                                        id="obs_modal_aprovacao"
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowAprovacaoModal(false)}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Overlay de Zoom */}
                    {zoomedImage && (
                        <div 
                            className="zoom-overlay" 
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 9999,
                                cursor: 'pointer'
                            }}
                            onClick={closeZoom}
                        >
                            <img 
                                src={zoomedImage} 
                                alt="Zoom" 
                                style={{ maxWidth: '90%', maxHeight: '90%' }}
                            />
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}