import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../components';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  it('Testa se contém o título About Pokédex', () => {
    render(<About />);
    const pokedexTitle = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });

    expect(pokedexTitle).toBeInTheDocument();
  });

  it('Testa se contém dois parágrafos sobre a Pokédex', () => {
    render(<About />);
    const paragraph = screen.getAllByText(/Pokémons/i);
    expect(paragraph).toHaveLength(2);
  });

  it('Testa se a página contém a seguinte imagem', () => {
    render(<About />);
    const image = screen.getByRole('img', { name: /Pokédex/i });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

// Referências https://github.com/testing-library/jest-dom#tohaveattribute //
