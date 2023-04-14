# SOLID-study

![img](./README/SOLID.png)

Estudos sobre SOLID aplicado em JavaScript.

# Descrição:

SOLID é originalmente um conjunto de princípios de design patterns voltados a POO (Programação Orientada a Objetos) identificados por Robert C. Martin, também conhecido como Uncle Bob, que caso seguidas trazem diversos benefícios técnicos e evitam alguns problemas relacionados á estrutura do código.

De acordo com próprio Uncle Bob, os benefícios do SOLID são universais, tangíveis a todo modelo de programação e código, e que os princípios são adaptáveis ás necessidades de quem tem um problema que envolve desenvolvimento de software.


## S (Single Responsibility Principle / Princípio de Responsibilidade Única):

O SRP afirma que uma classe ou módulo deve ter uma única razão para mudar. Isso significa que cada componente do software deve ter uma única área de responsabilidade e não deve se envolver em múltiplas tarefas ou funcionalidades. Se uma classe ou módulo tiver mais de uma responsabilidade, pode ser difícil de entender, manter e testar. Além disso, quando ocorrerem mudanças em uma das responsabilidades, pode haver impactos indesejados em outras partes do código, levando a um código frágil e propenso a erros.

O SRP incentiva a separação de preocupações e o design de código coeso, onde cada componente é especializado em uma única responsabilidade. Isso ajuda a melhorar a manutenibilidade, testabilidade e reusabilidade do código, facilitando a compreensão de suas funcionalidades e isolando os efeitos de mudanças em uma única área.

Na linguagem funcional, aplicar esta lógica é simples, principalmente na relação classe-function e module-function que, até mesmo visualmente, é fácil de perceber. Aplicar uma lógica unitária em uma function em um módulo em nada difere de POO e tem os mesmos ganhos. A adaptabilidade é total.

Exemplo:
<br/>

```markdown
    const firstName = "Lucas";
    const lastName = "Silva";
    let fullName;

    function fullNameGeneration(name, lastname){
        return `${name} ${lastname}`;
    }

    function lowerCaseFullName(name){
        return name.toLocaleLowerCase();
    }

    fullName = fullNameGeneration(firstName, lastName);

    console.log(["Full Name: ",fullNameGeneration(firstName, lastName)]);

    // Result Lucas Silva;
```

Neste código existem duas funções isoladas com responsabilidade única e especialista em sua área. A primeira função "fullNameGeneration" é responsável por pegar o nome e sobrenome e retornar o nome completo. A segunda função recebe um nome e aplica letras minúsculas à string.

Observando este código é possível perceber que as funções não estão interligadas e são responsáveis ​​por sua especialidade.

## O (Open-Closed Principle / Princípio Aberto-Fechado):

Este princípio postula que você pode mudar o comportamento do seu sistema sem mudar o código. Basicamente, este princípio nos permite escalar sistemas sem a necessidade de alterá-los, apenas adicionando novas funcionalidades.

Em outras palavras, uma classe ou módulo deve estar fechado para modificações, mas aberto para extensões. Isso significa que você deve poder adicionar novos comportamentos ou funcionalidades sem precisar alterar o código-fonte existente.

Exemplo:
<br/>

```markdown
const makeGenericSound = () => {
  console.log('Som de animal genérico');
};

const makeCatSound = () => {
  console.log('Meow!'); // Som de gato
};

const makeDogSound = () => {
  console.log('Woof!'); // Som de cachorro
};

const Animal = (name, makeSoundFn) => {
  return {
    name,
    makeSound: makeSoundFn
  };
};

const Cat = (name) => {
  return Animal(name, makeCatSound);
};

const Dog = (name) => {
  return Animal(name, makeDogSound);
};

const animal1 = Animal('Animal Genérico', makeGenericSound);
const cat1 = Cat('Gato Fofo');
const dog1 = Dog('Cachorro Amigável');

animal1.makeSound(); // Output: Som de animal genérico
cat1.makeSound(); // Output: Meow!
dog1.makeSound(); // Output: Woof!
```

Exemplo de aplicação do Princípio Aberto-Fechado com programação funcional. No exemplo acima, usamos funções para representar as classes e os métodos. A função Animal aceita um nome e uma função de makeSound como argumentos e retorna um objeto que representa um animal com seu nome e a função de makeSound específica para aquele animal. As funções makeCatSound e makeDogSound são as implementações específicas de som para gato e cachorro, respectivamente. As funções Cat e Dog são usadas para criar objetos que representam animais específicos, passando o nome e a função de makeSound correspondente.

## L (Liskov Substitution Principle / Princípio de Substituição de Liskov):

Este princípio define que os objetos de uma superclasse devem poder ser substituídos por objetos das subclasses sem quebrar a aplicação. O que requer que o comportamento dos objetos das subclasses sejam homólogos aos da superclasse.Em outras palavras, os objetos derivados devem ser substituíveis pelos objetos da classe base sem alterar o comportamento esperado do programa.

Esta visão é como um acordo entre partes, que decide os padrões de composição do código, similar com o conceito de design por contrato de Bertrand Meyer. Um acordo é ótimo para o bom funcionamento de um código e o beneficia através de padrões estabelecidos entre funções de entrada e suas saídas em funções de ordem superior no paradigma funcional.

```markdown
const Animal = (name) => {
  return {
    name,
    makeSound: () => {
      console.log('Som de animal genérico');
    }
  };
};

const Cat = (name) => {
  const animal = Animal(name);

  // Sobrescreve o método makeSound apenas para gatos
  animal.makeSound = () => {
    console.log('Meow!'); // Som de gato
  };

  return animal;
};

const Dog = (name) => {
  return Animal(name);
};

const animal1 = Animal('Animal Genérico');
const cat1 = Cat('Gato Fofo');
const dog1 = Dog('Cachorro Amigável');

animal1.makeSound(); // Output: Som de animal genérico
cat1.makeSound(); // Output: Meow!
dog1.makeSound(); // Output: Som de animal genérico (mesmo comportamento do Animal genérico)

```

No exemplo acima, usamos funções para representar as classes e os métodos. A função Animal aceita um nome e retorna um objeto que representa um animal com seu nome e um método makeSound genérico. A função Cat cria um objeto que representa um gato, derivando de Animal e sobrescrevendo o método makeSound para implementar o som de gato. A função Dog cria um objeto que representa um cachorro, usando apenas o comportamento do Animal genérico.

## I (Interface Segregation Principle ou ISP / Princípio da segregação de Interface)

## D (Dependency Inversion Principle / Princípio de Segregação de Interface)