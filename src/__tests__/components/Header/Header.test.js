import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Header } from '~/components';

describe('Fashionista', () => {
  describe('Components data-testid match', () => {
    it('should render properly the <Header> component', () => {
      const component = (
        <Router>
          <Header />
        </Router>
      );

      const { getByTestId } = render(component);

      const container = getByTestId('header');
      const headerLogo = getByTestId('header-logo');
      const headerSearchIcon = getByTestId('header-search-icon');
      const headerBagIcon = getByTestId('header-bag-icon');

      expect(container).toBeDefined();
      expect(headerLogo).toBeDefined();
      expect(headerSearchIcon).toBeDefined();
      expect(headerBagIcon).toBeDefined();
    });
  });
});
