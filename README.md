# react-usestate

1 UseState:
2 Instalação:

# 2.UseState:

const [state, setstate] = useState(value);
const [name, setName] = useState(value)

O useState está sendo utilizado para criar uma **variável** de estado chamada "name" e uma **função** setName para atualizar o valor desse estado.
O argumento passado para o useState é o valor inicial do estado, que nesse caso é value.

```javascript
function Basic() {
  const [name, setName] = useState("Leo");

  return <div>{name}</div>;
}
```

A estrutura [name, setName] é uma forma de desestruturação de array em JavaScript. Isso significa que o valor retornado pelo useState é um array com dois elementos: o valor atual do estado (no caso, "name") e a função para atualizar o estado (no caso, setName). Ao usar a desestruturação, podemos atribuir esses dois elementos a duas variáveis separadas, name e setName, respectivamente.

usestate retorna um array

    const meuEstado = usestate('leo')
    meuEstado[0]
    meuEstado[1]()

Dessa forma, podemos acessar e modificar o estado "name" usando a variável name e atualizá-lo chamando a função setName. Por exemplo, podemos chamar setName("Novo Valor") para atualizar o estado "name" com um novo valor.

O uso do useState dessa maneira permite que o componente mantenha e atualize um estado interno, que pode ser utilizado para controlar e refletir mudanças na interface do usuário ou em outras partes da lógica do componente.

React Hooks: Array Destructuring

```javascript
import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

// const [count, setCount] = useState(0);
var \_useState = useState(0),
count = \_useState[0],
setCount = \_useState[1]

https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals

# 2.Instalação:

## Passo 1. Como instalar o Create React App

conferir a versao do node: npm -v

Usar o npx também garante que estejamos usando a versão mais recente do Create React App para criar nosso projeto:

```javascript
npx create-react-app meu-app-do-react
```

npx create-react-app react-usestate

O npx nos dá a capacidade de usar o pacote create-react-app sem ter de instalá-lo primeiro no seu computador, o que é muito conveniente.
Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
Quando executarmos esse comando, uma pasta chamada "meu-app-do-react" será criada no nosso computador no local onde especificamos e todos os pacotes necessários serão instalados automaticamente.
No final apareceram as seguinets informações:

        Inside that directory, you can run several commands:

        npm start
            Starts the development server.

        npm run build
            Bundles the app into static files for production.

        npm test
            Starts the test runner.

        npm run eject
            Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory. If you do this, you can’t go back!

        We suggest that you begin by typing:

        cd react-usestate
        npm start

## Passo 2. Revisão da estrutura do projeto

        meu-app-do-react
        ├── README.md
        ├── node_modules
        ├── package.json
        ├── .gitignore
        ├── public
        └── src

Para que servem esses arquivos e pastas?

    README.md é um arquivo em markdown que inclui muitas dicas úteis e links que podem ajudar você em seu aprendizado no uso do Create React App.
    node_modules é uma pasta que inclui todo o código relacionado às dependências que o Create React App instalou. Você jamais precisará entrar nessa pasta.
    package.json é o arquivo que gerencia as dependências da aplicação e o que está incluído na pasta node_modules do projeto, além dos scripts de que precisamos para executar a nossa aplicação.
    .gitignore é um arquivo usado para excluir os arquivos e pastas do rastreamento do Git. Não precisamos incluir pastas grandes, como a pasta node_modules, por exemplo
    public é uma pasta que usaremos para armazenar nossos itens estáticos, como as imagens, svgs e fontes da aplicação em React.
    src é a pasta que contém o código-fonte. É lá que todo nosso código relacionado ao React estará e é nela que trabalharemos fundamentalmente na criação de nossa aplicação.

    Observação: um novo repositório do Git é criado sempre que fazemos um novo projeto no Create React App. É possível começar a salvar as alterações da aplicação de imediato usando git add . e git commit -m "sua mensagem de commit".

## Passo 3. Como executar seu projeto em React

Para iniciar seu projeto em React, simplesmente execute no terminal a linha abaixo:

        npm start

Ao executarmos nosso projeto, uma nova aba do navegador será aberta automaticamente no navegador padrão do computador e poderemos ver a aplicação.

O servidor de desenvolvimento será iniciado no endereço localhost:3000 e, imediatamente, poderemos ver a página inicial de nossa aplicação.

Do arquivo App.js, que se encontra na pasta src. Se formos até esse arquivo, poderemos começar a fazer as alterações no código da aplicação.

### Fonte:

https://www.freecodecamp.org/portuguese/news/como-criar-um-projeto-em-react-com-o-create-react-app-em-10-passos/

### Guia básico de Markdown

https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open
