import api from "../../services/api";


export async function deletarUsuario(id) {
  try {
    const response = await api.delete(`/${id}`); // <-- Corrigido
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
}
