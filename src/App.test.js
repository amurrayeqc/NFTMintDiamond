// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTMintDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTMintDiamond/i);
    expect(titleElement).toBeInTheDocument();
});
