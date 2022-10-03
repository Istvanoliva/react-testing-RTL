<p>Este projeto foi desenvolvido por <a href="https://github.com/Istvanoliva">Istvan Oliva</a> enquanto estudava Desenvolvimento Front-end na <a href="https://www.betrybe.com/">Trybe</a> :rocket:</p>

# O que deverá ser desenvolvido

Nesse projeto você escreverá testes para uma aplicação React.

## Desenvolvimento

Este repositório já contém uma aplicação React criada e configurada. Após clonar o projeto e instalar as dependências, você não precisará realizar nenhuma configuração adicional. Você deverá utilizar [`Jest`](https://jestjs.io/) e a biblioteca [`React Testing Library`](https://testing-library.com/) (também já instaladas e configuradas) para escrever os testes. Note que a aplicação contém uma implementação completa de todos os requisitos da Pokédex. Seu trabalho será, para cada requisito listado a seguir, escrever testes que garantam sua corretude. Cuidado com [testes _falsos positivos_](https://talkingabouttesting.com/2015/08/04/falsos-negativos-falsos-positivos-verdadeiros-negativos-e-verdadeiros-positivos/). Falsos positivos serão desconsiderados na avaliação.

 ##  Requisitos do projeto
 - 1 Teste o componente `<App.js />`
 - 2 Teste o componente `<About.js />`
 - 3 Teste o componente `<FavoritePokemons.js />`
 - 4 Teste o componente `<NotFound.js />`
 - 5 Teste o componente `<Pokedex.js />`
 - 6 Teste o componente `<Pokemon.js />`
 - 7 Teste o componente `<PokemonDetails.js />`


## Habilidades

Neste projeto, verificamos se voce é capaz de:

* Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.

* Simular eventos com a React-Testing-Library em testes automatizados.

* Testar fluxos lógicos assíncronos com a React-Testing-Library.

* Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.

* Criar mocks de APIs utilizando fetch.

* Testar inputs.

### Quem testa os testes?

  Nesse trabalho o avaliador automatizado **testam os testes de vocês!** A ideia dele é a seguinte: você vai escrever casos de teste para a aplicação, certo? E esses testes têm que garantir que a aplicação está funcionando, certo? Pois bem! Se eu quebro uma parte da aplicação, fazendo uma alteração no código, seus testes devem quebrar, certo? Pois é isso que o avaliador faz.
  Como assim? Pense da seguinte forma: nosso avaliador vai navegar por toda a aplicação da Pokédex e vai fazer várias mudanças no código dela **para que ela quebre e pare de funcionar**. Em seguida ele vai rodar seus testes. Caso seus testes não acusem que aplicação está com problemas o avaliador não vai aprovar aquele requisito! Se, para todas as alterações que o avaliador fizer no código da aplicação, os seus testes acusarem problemas, tudo será aprovado! O avaliador garante, portanto, que seus testes testam a aplicação da Pokédex como se deve!
  Na linguagem do avaliador, dizemos que cada mudança que o avaliador faz na sua aplicação é um **mutante**. O avaliador cria vários mutantes e seus testes **devem matar todos!** Se algum mutante sobreviver, temos problemas. Certo? Vamos aos requisitos então!
