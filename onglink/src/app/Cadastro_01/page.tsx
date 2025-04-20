'use client';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import Header_cadastro from "@/src/app/components/header_cadastro"




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

const Cadastro_01 = () => {
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
      router.push('/Cadastro_02');
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
              <input 
                type="text" 
                id="razao_social" 
                name="razao_social" 
                className={`border rounded w-full p-2 ${errors.razao_social ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.razao_social && <p className="text-red-500 text-sm">{errors.razao_social}</p>}
            </div>

            {/* Email e CNPJ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder='exemplo@exemplo.com'
                  className={`border rounded w-full p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

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
            </div>

            {/* Pessoa Responsável e CPF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="pessoa_responsavel" className="block mb-1">
                  Pessoa Responsável <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="pessoa_responsavel" 
                  name="pessoa_responsavel" 
                  className={`border rounded w-full p-2 ${errors.pessoa_responsavel ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.pessoa_responsavel && <p className="text-red-500 text-sm">{errors.pessoa_responsavel}</p>}
              </div>

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

            {/* Endereço e Complemento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="endereco" className="block mb-1">
                  Endereço Principal <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="endereco" 
                  name="endereco" 
                  className={`border rounded w-full p-2 ${errors.endereco ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.endereco && <p className="text-red-500 text-sm">{errors.endereco}</p>}
              </div>

              <div>
                <label htmlFor="complemento" className="block mb-1">
                  Complemento 
                </label>
                <input 
                  type="text" 
                  id="complemento" 
                  name="complemento" 
                  className={`border border-gray-300 rounded w-full p-2  `}
                />
                
              </div>
            </div>

            {/* Cidade, Estado e CEP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="cidade" className="block mb-1">
                  Cidade <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="cidade" 
                  name="cidade" 
                  className={`border rounded w-full p-2 ${errors.cidade ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
              </div>

              <div>
                <label htmlFor="estado" className="block mb-1">
                  Estado <span className="text-red-500">*</span>
                </label>
                <select 
                  id="estado" 
                  name="estado" 
                  className={`border rounded w-full p-2 ${errors.estado ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Selecione o estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
                {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
              </div>

              <div>
                <label htmlFor="cep" className="block mb-1">
                  CEP <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="cep" 
                  name="cep" 
                  placeholder="00000-000"
                  maxLength={9}
                  onChange={handleCEPChange}
                  className={`border rounded w-full p-2 ${errors.cep ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
              </div>
            </div>

            {/* Telefones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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