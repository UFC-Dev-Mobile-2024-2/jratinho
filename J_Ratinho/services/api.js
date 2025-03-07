import axios from "axios";

// Criando uma instância do axios com configurações personalizadas
const api = axios.create({
  baseURL: "https://jratinho.onrender.com/api", // Substitua pela URL base da sua API
  timeout: 10000, // Tempo limite de 10 segundos
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptores para tratamento de requisições
api.interceptors.request.use(
  (config) => {
    // Você pode adicionar tokens de autenticação aqui
    const token =
      "bff42965fdffb99e1a719533a0c4b208ba6b22023678c08ccacd7fa7a0137658b0c53fe4f8914c7ccab11ac6cd8dc89ae620be716757d58c19555d7f80fb1c6042a0beb9d3325d01959b565bbd9561ec06025c8d1727b1b554daf2869990fc1bfd3a73c67d323f5845853c6ae98b5f2db1d038b23ccfc6d3d3afb1c6bb8fa266";

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptores para tratamento de respostas
api.interceptors.response.use(
  (response) => {
    // Tratamento para respostas bem-sucedidas
    return response;
  },
  (error) => {
    // Tratamento de erros globais
    if (error.response) {
      // O servidor respondeu com um status de erro
      console.error("Erro na resposta:", error.response.status);
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      console.error("Sem resposta:", error.request);
    } else {
      // Algo aconteceu na configuração da requisição
      console.error("Erro:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
