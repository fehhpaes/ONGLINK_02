'use client';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import Header_cadastro from "@/src/app/components/header_cadastro"
import Input from '../components/inputFormulario';
import { CepResponse, getCepData } from '../services/cep';



// Funções de validação
const validarCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if ((resto === 10 || resto === 11 ? 0 : resto) !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  resto = (soma * 10) % 11;
  return (resto === 10 || resto === 11 ? 0 : resto) === parseInt(cpf[10]);
};

const validarCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/\D/g, '');
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  let soma = 0;
  let peso = 5;
  for (let i = 0; i < 12; i++) {
    soma += parseInt(cnpj[i]) * peso;
    peso = peso === 2 ? 9 : peso - 1;
  }
  const dv1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (dv1 !== parseInt(cnpj[12])) return false;

  soma = 0;
  peso = 6;
  for (let i = 0; i < 13; i++) {
    soma += parseInt(cnpj[i]) * peso;
    peso = peso === 2 ? 9 : peso - 1;
  }
  const dv2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  return dv2 === parseInt(cnpj[13]);
};

// Funções de formatação
const formatarCPF = (cpf: string): string => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
};

const formatarCNPJ = (cnpj: string): string => {
  return cnpj
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .substring(0, 18);
};

const formatarTelefone = (telefone: string): string => {
  return telefone
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1)$2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 14);
};

const formatarCEP = (cep: string): string => {
  return cep
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .substring(0, 9);
};

//tipo complementar que não vem na API do cep
type FormEndereco = {
  complemento?: string;
  numero?: number;
} & CepResponse;

//Inicializar endereço com nenhuma informação
const enderecoInicial = {
  cep: "",
  bairro: "",
  complemento: "",
  localidade: "",
  numero: undefined,
  uf: "",
  logradouro: "",
};

const Cadastro_01 = () => {

  //Função de interação com Endereço e CEP
  const [endereco, setEndereco] = useState<FormEndereco>(enderecoInicial);
  //const [enderecoResponse, setEnderecoResponse] = useState<CepResponse>();

  async function buscarCep(cep:string) {
      try{
          const cepDados = await getCepData(cep);
          setEndereco({...endereco, ...cepDados});
      //    setEnderecoResponse(cepDados);
      } catch (error){
          setEndereco({...enderecoInicial});
      //    setEnderecoResponse(undefined);
          console.log(error);
      }finally{
          console.log("foi");
      }
  }


  //Validar
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    // Validação dos campos
    if (!formData.get('razao_social')) newErrors.razao_social = 'Campo obrigatório';
    if (!formData.get('email')) newErrors.email = 'Campo obrigatório';
    
    // Validação do CNPJ
    const cnpj = formData.get('cnpj') as string;
    if (!cnpj) {
      newErrors.cnpj = 'Campo obrigatório';
    } else if (!validarCNPJ(cnpj)) {
      newErrors.cnpj = 'CNPJ inválido';
    }

    // Validação do CPF
    const cpf = formData.get('cpf') as string;
    if (!cpf) {
      newErrors.cpf = 'Campo obrigatório';
    } else if (!validarCPF(cpf)) {
      newErrors.cpf = 'CPF inválido';
    }

    // Validação dos demais campos
    if (!formData.get('pessoa_responsavel')) newErrors.pessoa_responsavel = 'Campo obrigatório';
    if (!formData.get('endereco')) newErrors.endereco = 'Campo obrigatório';
    
    if (!formData.get('cidade')) newErrors.cidade = 'Campo obrigatório';
    if (!formData.get('estado')) newErrors.estado = 'Campo obrigatório';
    
    // Validação do CEP
    const cep = formData.get('cep') as string;
    if (!cep) {
      newErrors.cep = 'Campo obrigatório';
    } else if (cep.replace(/\D/g, '').length !== 8) {
      newErrors.cep = 'CEP inválido';
    }

    if (!formData.get('telefone_01')) newErrors.telefone_01 = 'Campo obrigatório';
    if (!formData.get('sobre')) newErrors.sobre = 'Campo obrigatório';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push('/cad_ong_empresa');
    }
  };

  // Handlers para formatação automática
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatarCPF(e.target.value);
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatarCNPJ(e.target.value);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatarTelefone(e.target.value);
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = formatarCEP(e.target.value);
  };

  return (
    <>
    <Header_cadastro/>
    <body className='bg-verde1'>
     
      <main className="bg-verde2 min-h-screen flex items-center justify-center p-4 mt-4 mb-4">
        <div className="bg-white rounded-3xl border-4 p-6 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Cadastro</h1>

          <form onSubmit={handleSubmit}>
            {/* Razão Social */}
            <div className="mb-4">
              <label htmlFor="razao_social" className="block mb-1 ">
                Razão Social <span className="text-red-500">*</span>
              </label>
              <Input
                name="razao_social"
                placeholder="Nome Social"
                type="text"
                value=""  
                className={`border rounded w-full p-2 ${errors.razao_social ? 'border-red-500' : 'border-gray-300'}`}     
              />
              
              {errors.razao_social && <p className="text-red-500 text-sm">{errors.razao_social}</p>}
            </div>

            {/* Email e CNPJ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

              {/* CNPJ */}
              <div>
                <label htmlFor="cnpj" className="block mb-1">
                  CNPJ <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="cnpj" 
                  name="cnpj" 
                  placeholder="00.000.000/0000-00" 
                  maxLength={18}
                  onChange={handleCnpjChange}
                  className={`border rounded w-full p-2 ${errors.cnpj ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.cnpj && <p className="text-red-500 text-sm">{errors.cnpj}</p>}
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                    name="email"
                    placeholder="exemplo@email.com"
                    type="email"
                    value=""
                  className={`border rounded w-full p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              
            </div>

                        {/* Telefones */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Telefone 1 */}
              <div>
                <label htmlFor="telefone_01" className="block mb-1">
                  Telefone 1 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="telefone_01" 
                  name="telefone_01" 
                  placeholder="(00)00000-0000"
                  maxLength={14}
                  onChange={handleTelefoneChange}
                  className={`border rounded w-full p-2 ${errors.telefone_01 ? 'border-red-500' : 'border-gray-300 ' }`}
                />
                {errors.telefone_01 && <p className="text-red-500 text-sm">{errors.telefone_01}</p>}
              </div>

              <div>
                <label htmlFor="telefone_02" className="block mb-1">
                  Telefone 2
                </label>
                <input 
                  type="text" 
                  id="telefone_02" 
                  name="telefone_02" 
                  placeholder="(00)00000-0000"
                  maxLength={14}
                  onChange={handleTelefoneChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
            </div>

            {/* Pessoa Responsável e CPF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Pessoa Responsável */}
              <div>
                <label htmlFor="pessoa_responsavel" className="block mb-1">
                  Pessoa Responsável <span className="text-red-500">*</span>
                </label>
                <Input
                  name="pessoa_responsavel"
                  placeholder="Nome da pessoa"
                  type="text"
                  value=""
                  className={`border rounded w-full p-2 ${errors.pessoa_responsavel ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.pessoa_responsavel && <p className="text-red-500 text-sm">{errors.pessoa_responsavel}</p>}
              </div>

              {/* CPF */}
              <div>
                <label htmlFor="cpf" className="block mb-1">
                  CPF <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="cpf" 
                  name="cpf" 
                  placeholder="000.000.000-00"
                  maxLength={14}
                  onChange={handleCpfChange}
                  className={`border rounded w-full p-2 ${errors.cpf ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
              </div>
            </div>

            {/* Cidade, Estado e CEP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

              {/* CEP */}
              <div>
                <label htmlFor="cep" className="block mb-1">
                  CEP <span className="text-red-500">*</span>
                </label>
                <Input
                  name="cep"
                  placeholder="00000-000"
                  type="text"
                  value={endereco.cep}
                  changeEvent={(value) => {
                    const cep = value as string;
                    setEndereco({ ...endereco, cep });
                  }}
                  blurEvent={() => {
                    if (endereco.cep.length === 8) buscarCep(endereco.cep);
                  }}
                  
                  className={`border rounded w-full p-2 ${errors.cep ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
              </div>

              {/* Cidade */} 
              <div>
                <label htmlFor="cidade" className="block mb-1">
                  Cidade <span className="text-red-500">*</span>
                </label>
                <Input
                  name="cidade"
                  placeholder=""
                  type="text" 
                  className={`border rounded w-full p-2 ${errors.cidade ? 'border-red-500' : 'border-gray-300'}`}
                  value={endereco.localidade}
                  changeEvent={(value) =>
                  setEndereco({...endereco, localidade: value as string})
                  }
                />
                {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
              </div>

              {/* Estado */}
              <div>
                <label htmlFor="estado" className="block mb-1">
                  Estado <span className="text-red-500">*</span>
                </label>
                <Input
                  name="estado"
                  placeholder=""
                  type="text" 
                  className={`border rounded w-full p-2 ${errors.estado ? 'border-red-500' : 'border-gray-300'}`}
                  value={endereco.uf}
                  changeEvent={(value) =>
                      setEndereco({...endereco, uf: value as string})
                  }
                
                />
                  
                {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
              </div>

              
            </div>


            {/* Endereço e Numero */}
            <div className="flex flex-cols-2 md:grid-cols-2 gap-4 mb-4 ">
              {/* Endereço */}
              <div className='w-full'>
                <label htmlFor="endereco" className="block mb-1">
                  Endereço Principal <span className="text-red-500">*</span>
                </label>
                <Input
                  name="endereco"
                  placeholder=""
                  type="text" 
                  className={`border rounded w-full p-2 ${errors.endereco ? 'border-red-500' : 'border-gray-300'}`}
                  value={endereco?.logradouro ?? ""}
                  changeEvent={(value) =>
                      setEndereco({...endereco, logradouro: value as string})
                  }
                />
                {errors.endereco && <p className="text-red-500 text-sm">{errors.endereco}</p>}
              </div>



              {/* Numero da Rua */}
              <div className='w-25'>
                <label htmlFor="num_rua" className="block mb-1">
                Nº 
                </label>
                <Input
                  name="num_rua"
                  placeholder=""
                  type="text"
                  value="" 
                  className={`border border-gray-300 rounded w-full p-2  `}
                />
                
              </div>
            </div>

            {/* Bairro e Complemento */}      
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
              {/* Bairro */}            
              <div>
                <label htmlFor="bairro" className="block mb-1">
                  Bairro
                </label>
                <Input
                  name="bairro"
                  placeholder=""
                  type="text"
                  value={endereco?.bairro ?? ""}
                  changeEvent={(value) =>
                  setEndereco({...endereco, bairro: value as string})
                  }
                  className={`border border-gray-300 rounded w-full p-2  `}
                    /> 
                </div>

              {/* Complemento */}
              <div>
                <label htmlFor="complemento" className="block mb-1">
                  Complemento 
                </label>
                <Input
                  name="complemento"
                  placeholder=""
                  type="string"
                  value="" 
                  className={`border border-gray-300 rounded w-full p-2  `}
                />
                
              </div>
            </div>




            {/* Sobre a Empresa */}
            <div className="mb-6">
              <label htmlFor="sobre" className="block mb-1">
                Conte-nos mais sobre sua empresa ou ONG <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="sobre" 
                name="sobre" 
                className={`border rounded w-full p-2 ${errors.sobre ? 'border-red-500' : 'border-gray-300'}`}
                rows={4}
              ></textarea>
              {errors.sobre && <p className="text-red-500 text-sm">{errors.sobre}</p>}
            </div>

            {/* Botão de Continuar */}
            <div className="text-center">
              <button 
                type="submit" 
                className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </body>
    </>
  );
};

export default Cadastro_01;