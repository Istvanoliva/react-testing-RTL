import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Teste o componente Pokedex', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('Testa se contém um título com o texto Encountered pokémons', () => {
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i });
    expect(title).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista usando o botão', () => {
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(button).toBeInTheDocument();
  });

  it('Os próximos Pokémons da lista devem ser mostrados, um a um', () => {
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });

    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    const pokemon = screen.getByRole('img');
    expect(pokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png');
  });

  it('O primeiro Pokémon da lista deve ser mostrado ao clicar no botão', () => {
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });

    userEvent.click(button);
    const pokemon = screen.getByRole('img');
    expect(pokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

  it('Teste se é mostrado apenas um Pokémon por vez.', () => {
    const pokemon = screen.getAllByRole('img');
    expect(pokemon).toHaveLength(1);
  });

  it('Deve existir um botão para cada tipo de Pokémon, sem repetição', () => {
    const numberOfPokemonsTypes = 7;
    const pokemonTypes = screen.getAllByTestId('pokemon-type-button');
    expect(pokemonTypes).toHaveLength(numberOfPokemonsTypes);
  });

  it('A pokédex deve circular somente pelos pokémons daquele tipo', () => {
    const button = screen.getByRole('button', { name: /Psychic/i });
    userEvent.click(button);

    const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);
    userEvent.click(nextButton);
    userEvent.click(nextButton);

    const pokemon = screen.getByText(/Mew/i);
    expect(pokemon).toBeInTheDocument();
  });

  it('O botão All precisa estar sempre visível e mostrar os Pokémons normalmente', () => {
    const button = screen.getByRole('button', { name: /All/i });
    expect(button).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(nextButton);
    const secondPokemon = screen.getByText(/charmander/i);
    expect(secondPokemon).toBeInTheDocument();

    userEvent.click(button);
    const firsPokemon = screen.getByText(/pikachu/i);
    expect(firsPokemon).toBeInTheDocument();
  });
});
