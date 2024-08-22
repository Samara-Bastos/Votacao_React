# Sistema de Votação

## Sobre
Este projeto frontend foi desenvolvido para consumir uma API construída com Spring Boot, para a resolução desse [DESAFIO](https://github.com/Samara-Bastos/votacao-react-java).  Ele é construído utilizando React e Chakra UI para a interface do usuário.


## Executar
Para iniciar o projeto localmente, siga essas instruções:

Acesse o repositório da api, baixe o projeto e rode o mesmo seguindo suas instruções :

- https://github.com/Samara-Bastos/Votacao_Java

Instalação das dependências:

- npm install

Inicialização do projeto:

- npm start

Ou, para acessar a mesma de forma remota segue o link : 

- https://votacao-mgdy.onrender.com/

##  Dependências
- React
- React Router DOM
- Chakra UI
- Axios
- React Toastify
- Date-fns
- Styled-components

## Rotas
O projeto utiliza React Router para navegação entre diferentes páginas:

/usuario
- Criação de um novo usuário com CPF válido 

/usuario/visualizar
- Visualização de todos os usuários cadastrados

/pauta
- Criação de uma nova pauta

/pauta/visualizar
- Visualização de todas as pautas cadastradas

/pauta/visualizar/:id
- Visualização da pauta selecionada

/voto/:id 
- Registra o voto na pauta da sessão especificada no id


## US's

- ✅ [US001] Criar modelos
    - ✅ [US001-1] Design das telas
- ✅ [US002] Criar rotas e pages
    - ✅ [US002-1] Page Usuario cadastro
    - ✅ [US002-2] Page Usuario visualizar
    - ✅ [US002-3] Page votacao
    - ✅ [US002-4] Page Pauta cadastro
    - ✅ [US002-5] Page Pauta visualizar
    - ✅ [US002-6] Page Pauta visualizar por id
- ✅ [US003] Criar componentes
    - ✅ [US003-1] Componente card
    - ✅ [US003-2] Componente cabecalho
    - ✅ [US003-3] Componente botao
    - ✅ [US003-3] Componente formulario
    - ✅ [US003-3] Componente input
- ✅ [US004] Criar comunicação entre front e api
- ✅ [US005] Ajustar layout e responsividade


## US's - EXTRA

-  [US00X] Controle de usuário
    -  [US00X-1] ...