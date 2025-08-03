# React Native Exercises Project

Este projeto contém uma série de exercícios para praticar conceitos básicos e intermediários de React Native, incluindo componentes funcionais, props, listas, hooks, e estilização.


## Atividades realizadas

### 1) Componente `Greeting`
- Criado um componente funcional chamado `Greeting` que renderiza uma mensagem de saudação.
- Implementado em duas formas:
  - Utilizando função tradicional.
  - Utilizando arrow function.
- Adicionada estilização básica com `style`.

### 2) Props no `Greeting`
- Modificado o componente `Greeting` para aceitar as props `name` e `age`.
- Exibe essas informações junto com a mensagem.
- Adicionado o tipo `GreetingProps` para tipagem.

### 3) Lista de strings com componentes `ListContainer` e `ListItem`
- Criada uma lista constante de strings.
- Componente pai `ListContainer` transforma a lista em componentes filhos `ListItem`.
- Cada `ListItem` exibe o índice do item e o texto original.
- Estilização aplicada usando Tailwind CSS.
- Uso da função `map` para renderizar os itens.

### 4) Lista de objetos com múltiplos atributos
- Modificada a lista anterior para trabalhar com uma lista de objetos.
- Cada objeto tem pelo menos dois atributos (ex: nome da matéria e nota).
- `ListContainer` e `ListItem` atualizados para exibir os atributos do objeto.
- Adicionado tipo para os objetos da lista.

### 5) Componente `Countdown`
- Criado um componente `Countdown` que decrementa um valor de 10 a 0 a cada clique em um botão.
- Exibe mensagem no console a cada clique.
- Utiliza hooks `useState` e `useEffect`.
- Botão é desativado quando o valor chega a 0.

### 6) Componente `Random`
- Criado componente que sorteia um número de 0 a 100 e exibe na tela ao clicar no botão.
- Utilizado hook `useState`.
- **6a)** Alterado para sortear um item em uma lista recebida por props.

### 7) Componente `ToggleText`
- Componente que alterna entre dois textos diferentes ao clicar em um botão.
- Estilização básica adicionada via CSS.

### 8) Componente `CheckText`
- Componente com uma checkbox e um texto.
- Ao marcar a checkbox, o texto fica riscado.
- Ao desmarcar, o texto volta ao normal.
- Implementado com o componente `Checkbox` do `expo-checkbox`.



## Tecnologias utilizadas

- React Native
- TypeScript
- Hooks (`useState`, `useEffect`)
- Expo (para suporte a componentes como `Checkbox`)


## Como rodar o projeto

1. Clone o repositório  
```bash
git clone <url-do-repositorio>
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto com Expo

```bash
npx expo start
```

## Estrutura do projeto
`/components` — componentes reutilizáveis como Greeting, ListContainer, ListItem, Countdown, Random, ToggleText, CheckText.

`/screens` — telas principais do app (ex: tabs Home e Explore, Exercises).

`/assets` — imagens e ícones.
