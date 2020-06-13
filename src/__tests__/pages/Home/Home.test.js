import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Home } from '~/containers';

describe('Pages data-testid match', () => {
  it('should render properly the <Home> page', () => {
    const page = (
      <Router>
        <Home />
      </Router>
    );

    const { getByTestId } = render(page);

    const container = getByTestId('home-container');
    const homeHeader = getByTestId('home-header');
    const cards = getByTestId('cards');

    expect(container).toBeDefined();
    expect(homeHeader).toBeDefined();
    expect(cards).toBeDefined();
  });
});
