# API Documentation

Este documento descreve os endpoints utilizados no aplicativo, juntamente com exemplos de como fazer requisições e os retornos esperados.

## Base URL

A base URL para todas as requisições é: `https://api.seuapp.com`

## Endpoints

### 1. Login

- **Endpoint:** `/auth/login`
- **Método:** `POST`
- **Descrição:** Autentica um usuário.
- **Requisição:**
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
- **Resposta:**
    ```json
    {
      "token": "jwt_token",
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com"
      }
    }
    ```

#### Exemplo de Uso:

```javascript
import axios from 'axios';

const login = async (data) => {
  try {
    const response = await axios.post('https://api.seuapp.com/auth/login', data);
    console.log('Login successful: ', response.data);
  } catch (error) {
    console.error('Error logging in: ', error);
  }
};

const loginData = {
  email: 'user@example.com',
  password: 'password123'
};

login(loginData);
2. Cadastro
Endpoint: /auth/register
Método: POST
Descrição: Registra um novo usuário.
Requisição:
json
Copiar código
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
Resposta:
json
Copiar código
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com"
  }
}
Exemplo de Uso:
javascript
Copiar código
import axios from 'axios';

const register = async (data) => {
  try {
    const response = await axios.post('https://api.seuapp.com/auth/register', data);
    console.log('User registered: ', response.data);
  } catch (error) {
    console.error('Error registering user: ', error);
  }
};

const registerData = {
  name: 'John Doe',
  email: 'user@example.com',
  password: 'password123',
  confirmPassword: 'password123'
};

register(registerData);
3. Listar Contribuições
Endpoint: /contributions
Método: GET
Descrição: Retorna uma lista de contribuições do usuário.
Requisição: Nenhuma (o token de autenticação deve ser enviado no cabeçalho)
Resposta:
json
Copiar código
[
  {
    "id": 1,
    "location": "Praia da Barra",
    "date": "2024-06-15",
    "description": "Contribuição na Praia da Barra, RJ"
  },
  {
    "id": 2,
    "location": "Barra da Tijuca",
    "date": "2024-06-20",
    "description": "Contribuição na Barra da Tijuca, RJ"
  }
]
Exemplo de Uso:
javascript
Copiar código
import axios from 'axios';

const getContributions = async (token) => {
  try {
    const response = await axios.get('https://api.seuapp.com/contributions', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Contributions: ', response.data);
  } catch (error) {
    console.error('Error fetching contributions: ', error);
  }
};

const userToken = 'jwt_token';

getContributions(userToken);
4. Nova Contribuição
Endpoint: /contributions
Método: POST
Descrição: Cria uma nova contribuição.
Requisição:
json
Copiar código
{
  "location": "Praia de Copacabana",
  "date": "2024-06-25",
  "description": "Contribuição na Praia de Copacabana, RJ"
}
Resposta:
json
Copiar código
{
  "message": "Contribution created successfully",
  "contribution": {
    "id": 3,
    "location": "Praia de Copacabana",
    "date": "2024-06-25",
    "description": "Contribuição na Praia de Copacabana, RJ"
  }
}
Exemplo de Uso:
javascript
Copiar código
import axios from 'axios';

const createContribution = async (data, token) => {
  try {
    const response = await axios.post('https://api.seuapp.com/contributions', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Contribution created: ', response.data);
  } catch (error) {
    console.error('Error creating contribution: ', error);
  }
};

const contributionData = {
  location: 'Praia de Copacabana',
  date: '2024-06-25',
  description: 'Contribuição na Praia de Copacabana, RJ'
};

const userToken = 'jwt_token';

createContribution(contributionData, userToken);
5. Pesquisar Contribuições
Endpoint: /contributions/search
Método: GET
Descrição: Pesquisa contribuições com base em critérios específicos.
Requisição: Parâmetros de consulta (exemplo: ?location=Copacabana&date=2024-06-25)
Resposta:
json
Copiar código
[
  {
    "id": 3,
    "location": "Praia de Copacabana",
    "date": "2024-06-25",
    "description": "Contribuição na Praia de Copacabana, RJ"
  }
]
Exemplo de Uso:
javascript
Copiar código
import axios from 'axios';

const searchContributions = async (params, token) => {
  try {
    const response = await axios.get('https://api.seuapp.com/contributions/search', {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Search results: ', response.data);
  } catch (error) {
    console.error('Error searching contributions: ', error);
  }
};

const searchParams = {
  location: 'Copacabana',
  date: '2024-06-25'
};

const userToken = 'jwt_token';

searchContributions(searchParams, userToken);
6. Perfil do Usuário
Endpoint: /user/profile
Método: GET
Descrição: Retorna os dados do perfil do usuário.
Requisição: Nenhuma (o token de autenticação deve ser enviado no cabeçalho)
Resposta:
json
Copiar código
{
  "id": 1,
  "name": "John Doe",
  "email": "user@example.com",
  "profilePicture": "https://example.com/profile.jpg",
  "contributions": [
    {
      "id": 1,
      "location": "Praia da Barra",
      "date": "2024-06-15",
      "description": "Contribuição na Praia da Barra, RJ"
    },
    {
      "id": 2,
      "location": "Barra da Tijuca",
      "date": "2024-06-20",
      "description": "Contribuição na Barra da Tijuca, RJ"
    }
  ]
}
Exemplo de Uso:
javascript
Copiar código
import axios from 'axios';

const getUserProfile = async (token) => {
  try {
    const response = await axios.get('https://api.seuapp.com/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('User profile: ', response.data);
  } catch (error) {
    console.error('Error fetching user profile: ', error);
  }
};

const userToken = 'jwt_token';

getUserProfile(userToken);
Tratamento de Erros
É importante tratar os erros de forma adequada para garantir uma boa experiência do usuário. Aqui está um exemplo de como tratar erros utilizando Axios:

javascript
Copiar código
const handleError = (error) => {
  if (error.response) {
    // Request made and server responded
    console.error('Error data: ', error.response.data);
    console.error('Error status: ', error.response.status);
    console.error('Error headers: ', error.response.headers);
  } else if (error.request) {
    // Request made but no response received
    console.error('Error request: ', error.request);
  } else {
    // Something happened in setting up the request
    console.error('Error message: ', error.message);
  }
  console.error('Error config: ', error.config);
};