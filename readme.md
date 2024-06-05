# TideTech - Coastal Litter Detection App

## Descrição

TideTech é um aplicativo móvel que utiliza tecnologia de sonar para detectar e analisar lixo em áreas costeiras do oceano. O aplicativo visa sensibilizar e envolver a comunidade na preservação das áreas costeiras através de um sistema de gamificação, relatórios detalhados e ferramentas educativas.

## Funcionalidades

- **Mapa Interativo**: Visualize em tempo real as áreas costeiras monitoradas e os pontos de detecção de lixo.
- **Relatórios Detalhados**: Geração de relatórios gráficos e exportação de dados sobre a quantidade e tipos de lixo encontrados.
- **Alertas e Notificações**: Receba notificações push sobre novas detecções de lixo em áreas específicas.
- **Gamificação**: Ganhe pontos e conquistas por ações como relatar novos lixos, compartilhar informações e participar de desafios.
- **Educação e Conscientização**: Acesso a artigos, vídeos educativos, quizzes e dicas sobre sustentabilidade e conservação marinha.
- **Interação Social e Comunidade**: Perfis de usuários, rankings locais e globais, fóruns de discussão e organização de eventos.

## Tecnologias Utilizadas

- **Frontend**: React Native
- **Backend**: Node.js, Express
- **Banco de Dados**: Firebase Firestore
- **API para Detecção de Lixo**: Integração com sistema de sonar
- **Notificações Push**: Firebase Cloud Messaging
- **Autenticação**: Firebase Authentication (Email/Password, Google, Facebook)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/TideTech.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd TideTech
    ```
3. Instale as dependências do backend:
    ```sh
    cd backend
    npm install
    ```
4. Instale as dependências do frontend:
    ```sh
    cd ../frontend
    npm install
    ```

## Configuração

1. Configure as variáveis de ambiente no arquivo `.env` no diretório `backend`:
    ```env
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    ```
2. Configure o Firebase no projeto frontend:
    - Siga as instruções do [Firebase](https://firebase.google.com/docs/web/setup) para adicionar a configuração do Firebase.

## Executando o Projeto

1. Inicie o servidor backend:
    ```sh
    cd backend
    npm start
    ```
2. Inicie o aplicativo mobile:
    ```sh
    cd ../frontend
    npm start
    ```
3. Use um emulador ou dispositivo físico para visualizar o aplicativo.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch:
    ```sh
    git checkout -b minha-feature
    ```
3. Faça suas modificações e commit:
    ```sh
    git commit -m 'Minha nova feature'
    ```
4. Envie para a branch principal:
    ```sh
    git push origin minha-feature
    ```
5. Abra um Pull Request.

---

Obrigado por usar o TideTech!
