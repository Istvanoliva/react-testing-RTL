import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Verifica se a aplicação contém um conjunto fixo de links de navegação.', () => {
  it('Verifica se contem um link com o texto Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    expect(home).toBeInTheDocument();
  });

  it('Verifica se contem um link com o texto About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    expect(about).toBeInTheDocument();
  });

  it('Verifica se contem um link com o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(favorite).toBeInTheDocument();
  });

  it('Testa se ao clicar no Home, se redireciona para a URL /', () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('Testa se ao clicar no About, se redireciona para a URL /about ', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se ao clicar no favorite, se redireciona para a URL /favorites ', () => {
    const { history } = renderWithRouter(<App />);
    const favorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa se renderiza a página Not Found ao entrar em uma URL desconhecida. ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('naosei');

    const notFoundTitle = screen.getByRole('heading', {
      level: 2,
    });

    expect(notFoundTitle).toBeInTheDocument();
  });
});
