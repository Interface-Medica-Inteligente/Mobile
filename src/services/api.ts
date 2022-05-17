import { create } from "apisauce";
import Config from "../config";

export const api = create({
  baseURL: Config.baseURL,
});

const Api = {
  login: ({ email, password }: any) =>
    api.post("/medico/autenticar", {
      email,
      senha: password,
    }),
  register: ({ name, cpf, crm, genre, email, password }: any) =>
    api.post("/medico", {
      nome: name,
      senha: password,
      email,
      sexo: genre,
      crm,
      cpf,
    }),
  registerRecord: ({
    doctorId,
    name,
    birthDate,
    cpf,
    dadName,
    momName,
    genre,
    height,
    weight,
  }: any) =>
    api.post("/consulta/cadastrar-prontuario", {
      paciente: {
        cpf,
        nome: name,
        email: "",
        sexo: genre,
        dataNascimento: birthDate,
        nomeMae: momName,
        nomePai: dadName,
      },
      medico: doctorId || 5,
      peso: Number(weight),
      altura: Number(height),
    }),
  searchRecord: ({ cpf }: any) =>
    api.post("/consulta/consultar-prontuario", {
      cpf,
    }),
  registerRecipe: ({
    medicines,
    quantity,
    use,
    description,
    via,
    attendanceId,
  }: any) =>
    api.post("/receita/cadastrar-prescricao", {
      quantidadeUso: use,
      quantidadeDiaria: quantity,
      medicamento: {
        nome: medicines,
      },
      receita: {
        descricao: description,
        segundaVia: via === "SECOND",
        atendimento: attendanceId,
      },
    }),
  searchRecipe: ({ medicines, attendanceId }: any) =>
    api.post("/receita/consultar-receitas-filtro", {
      atendimento: attendanceId,
      medicamento: medicines,
    }),
  getRecipes: ({ attendanceId }: any) =>
    api.get(`/receita/consultar-receitas/${attendanceId}`),
  getEstablishmentName: ({ cnes }: any) =>
    api.get(`/registro-atendimento/consultar-cnes/${cnes}`),
  getDiagnosis: ({ cid }: any) =>
    api.get(`/registro-atendimento/consultar-cid/${cid}`),
  getReportPDF: ({
    cnes,
    establishmentName,
    cid,
    name,
    momName,
    weight,
    height,
    anamnese,
    diagnosis,
    treatment,
  }: any) =>
    api.post("/consulta/gerar-documento-laudo", {
      codigoCnes: cnes,
      nomeEstabelecimento: establishmentName,
      nomePaciente: name,
      nomeMae: momName,
      peso: `${weight} kg`,
      altura: `${height} cm`,
      codigoCid10: cid,
      diagnostico: diagnosis,
      anamnese,
      consultaPrevia: (response1 as any)[treatment],
    }),
  getRecipePDF: ({ name, medicines, quantity, use, description, via }: any) =>
    api.post("/consulta/gerar-documento-receita", {
      nomePaciente: name,
      medicamento: medicines,
      quantidade: String(quantity),
      uso: use,
      descricao: description,
      via: (response2 as any)[via],
    }),
};

const response1 = {
  YES: "Sim",
  NO: "Não",
};

const response2 = {
  FIRST: "1ª",
  SECOND: "2ª",
};

export default Api;
