# Teste Kognit

## Aplicação teste para avaliação da equipe técnica da empresa Kognit.

### Obs: Utilizei a ferramenta docker para melhor separar as aplicações, em vista de que utilizo ubuntu.

### Imagens utilizadas:
- SQL Server: 2022-latest
- Node: 18
- Dotnet: 6.0

### As imagens do Dotnet e SQL Server são de autoria da Microsoft.

### Para rodar as aplicações basta realizar um compose up do docker-compose.dev.yml o qual contém os serviços.

## - Backend -

### Consiste em dois controllers um de usuários e outro de carteiras.

### Usuário:
- Criar
### Carteira:
- Criar
- Listar por usuário

### Os arquivos .http podem ser utilizados pela extensão API Rest do VsCode para fazer testes de chamada para a API.

### Ou então simplesmente pode ser utilziado um Postman ou Inmsonia para testar as requisições.

### As chamadas da API funcionam tanto utilizando o Core via Debugger tanto utilizando o serviço docker, porém com o Debugger é utilizada a conexão localhost do serviço do banco e via serviço a conexão é feita via docker network.

## - Frontend -

### Tela de login simples em NextJS e ao logar com qualquer usuário, entra em uma página de dashboard a qual conta com um botão de notificações, ao entrar na página são carregadas as notificações pela API passada nas especificações.

## - Database -

### SQL Server co tabelas Kognit_User e Kognit_Wallet.

