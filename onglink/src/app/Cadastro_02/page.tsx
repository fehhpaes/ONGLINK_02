import { global } from "styled-jsx/css";

















const Cadastro_02 = () =>  {
    return(

        <main className="bg-verde2">
            {/* Div formulario */}   
            <div className="bg-white">
                <div><h1>Cadastro</h1></div>
                

                {/* Escolha Empresa ou ONG */}
                <div className="flex">
                    {/* Escolha Empresa */}
                    <div>
                        <label htmlFor="rbEmpresa">Empresa</label>
                        <input type="radio" name="rbEmpresa" id="rbEmpresa" />
                    </div>

                    {/* Escolha ONG */}
                    <div>
                        <label htmlFor="rbOng">ONG</label>
                        <input type="radio" name="rbOng" id="rbOng" />
                    </div>
                </div>

                {/* Compos das redes sociais */}
                <div>
                    {/* Instagram */}
                    <div>
                        <label htmlFor="campoInstagram">Link do Instagram</label>
                        <input 
                        type="text" 
                        name="campoInstagram" 
                        id="campoInstagram" 
                        className="bg-white border rounded w-full p-2 border-gray-300"
                        />
                    </div>
                    {/* Facebook */}
                    <div>
                        <label htmlFor="campoFacebook">Link do Facebook</label>
                        <input 
                        type="text" 
                        name="campoFacebook" 
                        id="campoFacebook" 
                        className="bg-white border rounded w-full p-2 border-gray-300"
                        />
                    </div>
                    {/* X */}
                    <div>
                        <label htmlFor="campoX">Link do X</label>
                        <input 
                        type="text" 
                        name="campoX" 
                        id="campoX" 
                        className="bg-white border rounded w-full p-2 border-gray-300"
                        />
                    </div>
                    {/* Linkedin */}
                    <div>
                        <label htmlFor="campoLinkedin">Link do Linkedin</label>
                        <input 
                        type="text" 
                        name="campoLinkedin" 
                        id="campoLinkedin" 
                        className="bg-white border rounded w-full p-2 border-gray-300"
                        />
                    </div>

                </div>
            </div>
        </main>
        
    );

};







export default Cadastro_02;