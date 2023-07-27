# Design System - Exercício

## Índice

-   [1. Instalação e Material](#instalação-e-material)
-   [2. Exercício 1](#exercício-1)
-   [3. Exercício 2](#exercício-2)
-   [4. Exercício 3](#exercício-3)

## Instalação e Material

### Instalação

-   Para fazer a instalação do Chakra UI basta rodar o seguinte comando:

    ```
    npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
    ```

-   Após a instalação da Lib, precisamos **chamar** o `provider`, isso pode ser feito no `App.js` ou no `index.js`:

    -   Dentro do `App.js`:
        -   importar:
            ```
            (...)
            import { ChakraBaseProvider } from '@chakra-ui/react';
            ```
            (...)
        -   chamar:
            ```
            (...)
                return (
                <ChakraBaseProvider>
                    <h1>Me apague quando for iniciar!</h1>
                    <p>Chame o Card aqui!</p>
                </ChakraBaseProvider>
            );
            (...)
            ```
    -   Dentro do `index.js`:

        ```
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';
        import { ChakraBaseProvider } from '@chakra-ui/react';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <ChakraBaseProvider>
                    <App />
                </ChakraBaseProvider>
            </React.StrictMode>
        );
        ```

    -   Onde a importação do `Provider` foi feita, faça também, a importação do `theme` e passe-o como parâmetro para o componente `ChakraBaseProvider`:

        ```
           import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App';
        import { ChakraBaseProvider, theme } from '@chakra-ui/react';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
           <React.StrictMode>
                 <ChakraBaseProvider theme={theme}>
                    <App />
                 </ChakraBaseProvider>
           </React.StrictMode>
        );
        ```

### Material

[Documentação do ChakraUI](https://chakra-ui.com/getting-started)<br>
[Templates do ChakraUI](https://chakra-templates.dev/components/cards)

## Exercício 1

### Enunciado

No primeiro exercício vamos praticar a instalação e configuração do ChakraUI.

-   Instale o React
-   Instale o ChakraUI
-   Configure o Provider no App
-   Implemente um botão do Chakra no App para confirmar que tudo está funcionando

Se você não estiver lembrando como iniciar um aplicativo React, aqui está um link com diferentes formas de criá-lo:
https://www.notion.so/labenu/Cria-o-de-um-App-React-c1b9739d6ca54227b4acad0419b73ee0

### Resolução

## Exercício 2

### Enunciado

Agora vamos utilizar um template pronto de Card no Chakra e implementá-lo.

-   Acesse o link dos templates de Card do Chakra no README do repositório
-   Escolha um dos Cards prontos e implemente-o em um arquivo separado e chame-o no seu App (pode ser igual o da aula)
-   Teste tudo e confirme que está funcionando

### Resolução

## Exercício 3

### Enunciado

Para finalizar, crie um array com no mínimo 3 itens, baseado no Card que você implementou.
<br><br>
Por exemplo: se escolheu o Card de produtos (Product Simple), então o array guardará objetos com propriedades brand (marca), name (nome), priceDescount (preço com desconto) e priceNormal (preço normal).
<br><br>
Não iremos utilizar o axios nesse exercício, por isso vamos criar nosso próprio array de dados.

-   Você pode decidir se vai deixar o array em um arquivo separado e exportá-lo, ou então criá-lo direto no App.js
-   Crie um estado e coloque seu array como valor inicial (não se preocupe em utilizar a função de atualização)
-   Mapeie o estado, retornando o Card passando as props necessárias para personalização
-   Edite o Card para receber as props e utilizá-las em seu interior

### Resolução
