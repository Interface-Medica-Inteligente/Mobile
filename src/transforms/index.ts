const LABEL = {
  M: "Masculino",
  F: "Feminino",
};

export const transformRecord = (data: any) => {
  return {
    name: data.nomePaciente,
    momName: data.nomeMae,
    dadName: data.nomePai,
    birthDate: data.dataNascimento,
    height: data.altura,
    weight: data.peso,
    cpf: data.cpf,
    genre: {
      key: data.sexo,
      label: (LABEL as any)[data.sexo],
    },
  };
};

export const transformRecipes = (data: any[]) => {
  return data.map((recipe) => ({
    id: recipe.receita,
    revenueDate: recipe.dataAtendimento,
    medicines: recipe.medicamentos[0].nome,
  }));
};
