import api from "../../services/api";

export async function deletarUsuario(id) {
  try {
    await api.delete(`/${id}`);
    return true; // Sucesso
  } catch (error) {
    console.error("Erro ao deletar usuário", error);
    throw error;
  }
}
