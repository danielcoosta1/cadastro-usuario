import api from "../../services/api";

export async function buscarUsuario() {
  try {
    const response = await api.get("/");
    return response.data; // Return the data so it can be used elsewhere
  } catch (error) {
    console.error("Erro ao buscar usuário", error);
    throw error; // Re-throw the error if needed
  }
}

