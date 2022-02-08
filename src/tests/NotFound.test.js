import React from 'react';
import { screen, render } from '@testing-library/react';
import { NotFound } from '../components';

describe('Teste o componente NotFound', () => {
  it('Testa se contém um título com o texto Page requested not found', () => {
    render(<NotFound />);
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i });
    expect(title).toBeInTheDocument();
  });

  it('Teste se página mostra a imagem', () => {
    render(<NotFound />);
    const image = screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i,
    });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
