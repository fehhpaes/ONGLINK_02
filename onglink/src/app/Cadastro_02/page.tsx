import { global } from "styled-jsx/css";
import Image from 'next/image';
import logo_instagram from '@/src/app/img/icons/instagram_6422200.png'
import logo_twitter from '@/src/app/img/icons/twitter_5968830.png'
import logo_facebook from '@/src/app/img/icons/social_12942738.png'
import logo_linkedin from '@/src/app/img/icons/linkedin_3536569.png'













const Cadastro_02 = () =>  {
    return(

        <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
            {/* Div formulario */}   
            <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl">
                <div><h1 className="text-center">Cadastro</h1></div>
                
                <form >
                    {/* Escolha Empresa ou ONG */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-center ">
                        {/* Escolha Empresa */}
                        <div>
                            <label htmlFor="rbEmpresa" className="ml-5 mr-3">Empresa</label>
                            <input type="radio" name="rbEscolha" id="rbEmpresa" className="" />
                        </div>

                        {/* Escolha ONG */}
                        <div>
                            <label htmlFor="rbOng" className="ml-5 mr-3">ONG</label>
                            <input type="radio" name="rbEscolha" id="rbOng" />
                        </div>
                    </div>

                    {/* Campos das redes sociais */}
                    <div className="w-50 justify-self-center">
                        {/* Instagram */}
                        <div>   
                            {/* Label e imagem */}    
                            <div className="flex">
                                <Image src={logo_instagram}
                                    alt="Logo Twitter"
                                    width={24} // Largura em pixels
                                    height={24} // Altura em pixels
                                    className="shadow-md mt-1 mb-1 mr-2">
                                    
                                </Image>
                                <label htmlFor="campoInstagram" className="mt-1">Link do Instagram</label>
                                
                            </div>
                            <input 
                            type="text" 
                            name="campoInstagram" 
                            id="campoInstagram" 
                            className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                            />
                        </div>
                        {/* Facebook */}
                        <div>
                            {/* Label e imagem */}    
                            <div className="flex">
                            <Image src={logo_facebook}
                                alt="Logo Twitter"
                                width={24} // Largura em pixels
                                height={24} // Altura em pixels
                                className="shadow-md mt-1 mb-1 mr-2">
                                
                            </Image>
                            <label htmlFor="campoFacebook" className="mt-1">Link do Facebook</label>
                            
                            </div>
                            <input 
                            type="text" 
                            name="campoFacebook" 
                            id="campoFacebook" 
                            className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                            />
                        </div>
                        {/* X */}
                        <div>
                            {/* Label e imagem */}    
                            <div className="flex">
                            <Image src={logo_twitter}
                                alt="Logo Twitter"
                                width={24} // Largura em pixels
                                height={24} // Altura em pixels
                                className="shadow-md mt-1 mb-1 mr-2">
                                
                            </Image>
                            <label htmlFor="campoX" className="mt-1">Link do X</label>
                            
                            </div>
                            <input 
                            type="text" 
                            name="campoX" 
                            id="campoX" 
                            className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                            />
                        </div>
                        {/* Linkedin */}
                        <div>
                            {/* Label e imagem */}    
                            <div className="flex">
                            <Image src={logo_linkedin}
                                alt="Logo Twitter"
                                width={24} // Largura em pixels
                                height={24} // Altura em pixels
                                className="shadow-md mt-1 mb-1 mr-2">
                                
                            </Image>
                            <label htmlFor="campoLinkedin" className="mt-1">Link do Linkedin</label>
                            </div>
                            <input 
                            type="text" 
                            name="campoLinkedin" 
                            id="campoLinkedin" 
                            className="bg-white border rounded w-full p-2 border-gray-300 mb-3"
                            />
                        </div>

                    </div>
                </form>
            </div>
        </main>
        
    );

};







export default Cadastro_02;