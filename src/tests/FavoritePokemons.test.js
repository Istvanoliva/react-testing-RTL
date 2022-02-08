import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../components';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

describe('Teste o componente FavoritePokemons', () => {
  it('Se não houver favoritos, conter a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemons />);
    const message = screen.getByText(/No favorite pokemon found/i);
    expect(message).toBeDefined();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/23');
    const isFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(isFavorite);

    history.push('/pokemons/148');
    const secondFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(secondFavorite);

    const favoritePage = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoritePage);

    const pokemons = screen.queryAllByTestId('pokemon-name');
    expect(pokemons).toHaveLength(2);
  });
});
