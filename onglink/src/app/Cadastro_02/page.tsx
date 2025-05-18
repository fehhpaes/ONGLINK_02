'use client';
import { global } from "styled-jsx/css";
import Image from 'next/image';
import logo_instagram from '@/src/app/img/icons/instagram_6422200.png'
import logo_twitter from '@/src/app/img/icons/twitter_5968830.png'
import logo_facebook from '@/src/app/img/icons/social_12942738.png'
import logo_linkedin from '@/src/app/img/icons/linkedin_3536569.png'
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import { Button } from "react-bootstrap";
import Header_cadastro from "@/src/app/components/header_cadastro"
import Input from '../components/inputFormulario';
import { useRouter } from "next/navigation";

const Cadastro_02 = () => {
    const router = useRouter();
    const [tipoCadastro, setTipoCadastro] = useState<number | null>(null);
    const [logoEmpresa, setLogoEmpresa] = useState<File | null>(null);
    const [logoOng, setLogoOng] = useState<File | null>(null);
    const [pdf1Ong, setPdf1Ong] = useState<File | null>(null);
    const [pdf2Ong, setPdf2Ong] = useState<File | null>(null);
    const [previewLogoEmpresa, setPreviewLogoEmpresa] = useState<string | null>(null);
    const [previewLogoOng, setPreviewLogoOng] = useState<string | null>(null);
    const [causaSelecionada, setCausaSelecionada] = useState<number | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        
        if (value === 1) {
            setLogoOng(null);
            setPdf1Ong(null);
            setPdf2Ong(null);
            setPreviewLogoOng(null);
        } else if (value === 2) {
            setLogoEmpresa(null);
            setPreviewLogoEmpresa(null);
        }
        
        setTipoCadastro(value);
    };

    const handleCausaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCausaSelecionada(parseInt(e.target.value));
    };

    const handleLogoEmpresaChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogoEmpresa(file);
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogoEmpresa(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogoOngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLogoOng(file);
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogoOng(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePdf1OngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPdf1Ong(e.target.files[0]);
        }
    };

    const handlePdf2OngChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPdf2Ong(e.target.files[0]);
        }
    };

    const handleConfirmar = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        // Validação para Empresa
        if (tipoCadastro === 1 && !logoEmpresa) {
            alert('Por favor, selecione o logo da empresa');
            return;
        }
        
        // Validação para ONG
        if (tipoCadastro === 2) {
            if (!logoOng || !pdf1Ong || !pdf2Ong) {
                alert('Por favor, preencha todos os campos obrigatórios para ONG');
                return;
            }
            
            if (!causaSelecionada) {
                alert('Por favor, selecione a causa principal da sua organização');
                return;
            }
        }
        
        
        
        // Redireciona para a página de login
        router.push('/login');
    };

    return (
        <>
            <Header_cadastro/>

            <body className='bg-verde1'>
                
            <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
                <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl ">
                    <div><h1 className="text-center">Cadastro</h1></div>
                    
                    <form>
                        
                        {/* Campos das redes sociais (mantido do original) */}
                        <div className="w-50 justify-self-center">
                            {/* Instagram */}
                            <div>   
                                <div className="flex">
                                    <Image src={logo_instagram}
                                        alt="Logo Instagram"
                                        width={24}
                                        height={24}
                                        className="shadow-md mt-1 mb-1 mr-2"
                                    />
                                    <label htmlFor="campoInstagram" className="mt-1">Link do Instagram</label>
                                </div>
                                <Input 
                                name="campoInstagram" 
                                type="text" 
                                id="campoInstagram" 
                                placeholder="Instagram"
                                value=""
                                className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                />
                                
                            </div>
                            
                            {/* Facebook */}
                            <div>
                                <div className="flex">
                                    <Image src={logo_facebook}
                                        alt="Logo Facebook"
                                        width={24}
                                        height={24}
                                        className="shadow-md mt-1 mb-1 mr-2"
                                    />
                                    <label htmlFor="campoFacebook" className="mt-1">Link do Facebook</label>
                                </div>
                                <Input 
                                name="campoFacebook" 
                                type="text" 
                                id="campoFacebook" 
                                placeholder="Facebook"
                                value=""
                                className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                />
                                
                            </div>
                            
                            {/* X (Twitter) */}
                            <div>
                                <div className="flex">
                                    <Image src={logo_twitter}
                                        alt="Logo Twitter"
                                        width={24}
                                        height={24}
                                        className="shadow-md mt-1 mb-1 mr-2"
                                    />
                                    <label htmlFor="campoX" className="mt-1">Link do X</label>
                                </div>
                                <Input 
                                name="campoX" 
                                type="text" 
                                id="campoX" 
                                placeholder="@"
                                value=""
                                className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                />
                                
                            </div>
                            
                            {/* LinkedIn */}
                            <div>
                                <div className="flex">
                                    <Image src={logo_linkedin}
                                        alt="Logo LinkedIn"
                                        width={24}
                                        height={24}
                                        className="shadow-md mt-1 mb-1 mr-2"
                                    />
                                    <label htmlFor="campoLinkedin" className="mt-1">Link do LinkedIn</label>
                                </div>
                                <Input 
                                name="campoLinkedin" 
                                type="text" 
                                id="campoLinkedin" 
                                placeholder="Linkedin"
                                value=""
                                className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                />
                                
                            </div>
                        </div>
                        {/* Escolha Empresa ou ONG */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-center">
                            <div>
                                <label htmlFor="rbEmpresa" className="ml-5 mr-3">Empresa</label>
                                <input 
                                    type="radio" 
                                    name="rbEscolha" 
                                    id="rbEmpresa" 
                                    value={1}
                                    onChange={handleRadioChange}
                                    checked={tipoCadastro === 1}
                                />
                            </div>

                            <div>
                                <label htmlFor="rbOng" className="ml-5 mr-3">ONG</label>
                                <input 
                                    type="radio" 
                                    name="rbEscolha" 
                                    id="rbOng" 
                                    value={2}
                                    onChange={handleRadioChange}
                                    checked={tipoCadastro === 2}
                                />
                            </div>
                        </div>

                        {/* Campo para logo da Empresa */}
                        {tipoCadastro === 1 && (
                            <div className="mb-6 text-center">
                                <h3 className="text-lg font-semibold mb-3">Logo da Empresa</h3>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoEmpresaChange}
                                    className="hidden"
                                    id="logo-empresa"
                                />
                                <label
                                    htmlFor="logo-empresa"
                                    className="block px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 text-center mb-3"
                                >
                                    Selecionar Logo
                                </label>
                                {previewLogoEmpresa && (
                                    <div className="flex justify-center">
                                        <div className="relative w-32 h-32 border rounded overflow-hidden">
                                            <Image
                                                src={previewLogoEmpresa}
                                                alt="Preview do logo da empresa"
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                )}
                                {/* Campo para Área de atuação da Empresa */}
                                <div className="w-50 justify-self-center">
                                    <h3 className="text-lg font-semibold mb-3">
                                    Área de atuação
                                    </h3>
                                    <input 
                                        type="text" 
                                        name="campoAtuacaoEmpresa" 
                                        id="campoAtuacaoEmpresa" 
                                        className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                                    />
                                </div>
                                <Button className="justify-self-center" onClick={handleConfirmar}>Confirmar</Button>
                            </div>
                        )}

                        {/* Campos para ONG */}
                        {tipoCadastro === 2 && (
                            <div className="mb-6 space-y-4 text-center">
                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Logo da ONG</h3>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoOngChange}
                                        className="hidden"
                                        id="logo-ong"
                                    />
                                    <label
                                        htmlFor="logo-ong"
                                        className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                    >
                                        Selecionar Logo
                                    </label>
                                    {previewLogoOng && (
                                        <div className="flex justify-center">
                                            <div className="relative w-32 h-32 border rounded overflow-hidden">
                                                <Image
                                                    src={previewLogoOng}
                                                    alt="Preview do logo da ONG"
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                        </div>
                                    )}


                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Ata de Criação (PDF)</h3>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handlePdf1OngChange}
                                        className="hidden"
                                        id="pdf1-ong"
                                    />
                                    <label
                                        htmlFor="pdf1-ong"
                                        className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                    >
                                        Selecionar PDF
                                    </label>
                                    {pdf1Ong && (
                                        <p className="text-center text-sm text-gray-600">
                                            {pdf1Ong.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Estatuto Social (PDF)</h3>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        onChange={handlePdf2OngChange}
                                        className="hidden"
                                        id="pdf2-ong"
                                    />
                                    <label
                                        htmlFor="pdf2-ong"
                                        className="block px-4 py-2 bg-header text-white rounded cursor-pointer hover:bg-green-600 text-center mb-3"
                                    >
                                        Selecionar PDF
                                    </label>
                                    {pdf2Ong && (
                                        <p className="text-center text-sm text-gray-600">
                                            {pdf2Ong.name}
                                        </p>
                                    )}
                                </div>
                                
                                {/* Campos para ONG */}
                                <div>
                                    <h3 className="text-lg font-semibold mb-3">Escolha a causa principal da sua organização:</h3>
                                    
                                    <label htmlFor="causaAmbiental" className="mr-1 ml-3">Ambiental</label>
                                    <input 
                                        type="radio" 
                                        name="escCausa" 
                                        id="causaAmbiental" 
                                        value={1}
                                        onChange={handleCausaChange}
                                        checked={causaSelecionada === 1}
                                    />
                                    
                                    <label htmlFor="causaAnimal" className="mr-1 ml-3">Animal</label>
                                    <input 
                                        type="radio" 
                                        name="escCausa" 
                                        id="causaAnimal" 
                                        value={2}
                                        onChange={handleCausaChange}
                                        checked={causaSelecionada === 2}
                                    />
                                    
                                    <label htmlFor="causaEducacao" className="mr-1 ml-3">Educação</label>
                                    <input 
                                        type="radio" 
                                        name="escCausa" 
                                        id="causaEducacao" 
                                        value={3}
                                        onChange={handleCausaChange}
                                        checked={causaSelecionada === 3}
                                    />
                                    
                                    <label htmlFor="causaSaude" className="mr-1 ml-3">Saúde</label>
                                    <input 
                                        type="radio" 
                                        name="escCausa" 
                                        id="causaSaude" 
                                        value={4}
                                        onChange={handleCausaChange}
                                        checked={causaSelecionada === 4}
                                    />
                                    
                                    <label htmlFor="causaSocial" className="mr-1 ml-3">Social</label>
                                    <input 
                                        type="radio" 
                                        name="escCausa" 
                                        id="causaSocial" 
                                        value={5}
                                        onChange={handleCausaChange}
                                        checked={causaSelecionada === 5}
                                    />
                                </div>

                                <Button className="justify-self-center" onClick={handleConfirmar}>Confirmar</Button>
                            </div>
                        )}
                    </form>
                </div>
            </main>
            </body>
        </>

    );
};

export default Cadastro_02;