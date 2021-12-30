# Foodgram - Back-end - Api

# <a href="https://foodgram-jp-dev.herokuapp.com/">🔗 Foodgram</a>
<p>🚀 Aplicação voltada para armazenamento e publicação de fotos, voltadas a gastronomia</p>

# Status da Aplicação
<p>🔥 Aplicação Finalizada</p>

# Features
- Cadastro de Usuário
- Atualização de Email
- Atualização de Senha
- Recuperação de Senha
- Exclusão de Usuário
- Armazenamento de Fotos
- Leitura de Fotos
- Exclusão de Fotos

# Tecnologias
- Node
- Typescript
- Nodemailer
- Prisma
- Jest

# Instalação

Você precisa ter instalado em sua máquina o Node, GIT, um banco de dados MariaDB/MySQL instalado localmente e o pacote Yarn instalado de forma global, após isso rode o seguinte comando: 
```sh
  git clone https://github.com/JPedro910/foodgram-back-end.git
```
Após clonar a aplicação, entre em sua pasta e rode o seguinte comando:
```sh
  yarn install
```
# Execução

Após a instalação, substitua as variáveis de ambiente de teste que a aplicação pede, você deve permitir o acesso do nodemailer a seu email, após isso rode o seguinte comando:
```sh
  yarn test --watchAll
```
Após a execução dos testes, substitua as variáveis de ambiente necessárias no arquivo principal e rode o seguinte comando:
```sh
  yarn dev
```