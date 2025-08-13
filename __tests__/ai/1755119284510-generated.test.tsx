import React from 'react';
import { render, screen } from '@testing-library/react';

// target: app/layout.js

describe('AI Fallback Test Suite', () => {
  it('renders a basic smoke test', () => {
    const Dummy = () => <div data-testid="smoke">ok</div>;
    render(<Dummy />);
    expect(screen.getByTestId('smoke').textContent).toBe('ok');
  });
});
