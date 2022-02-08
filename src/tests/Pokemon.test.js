import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Teste o componente Pokemon', () => {
  beforeEach(() => renderWithRouter(<App />));
  it('Teste o nome, tipo, peso e imagem do card Pokémon', () => {
    const name = screen.getByTestId('pokemon-name');
    const type = screen.getByTestId('pokemon-type');
    const weight = screen.getByText(/Average weight: 6.0 Kg/i);
    const image = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(name).toBeInTheDocument();
    expect(type).toHaveTextContent('Electric');
    expect(weight).toBeDefined();
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Teste se o card Pokédex contém um link de navegação com as devidas funcões', () => {
    const pokemonDetails = screen.getByRole('link', { name: /more details/i });
    expect(pokemonDetails).toHaveAttribute('href', '/pokemons/25');

    userEvent.click(pokemonDetails);
    const detailsTitle = screen.getByRole('heading', { name: /pikachu details/i });
    expect(detailsTitle).toBeInTheDocument();

    const checkbox = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);

    const image = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(image).toHaveAttribute('src', '/star-icon.svg');
  });
});
