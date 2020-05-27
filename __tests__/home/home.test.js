import React from 'react';
import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Home from 'pages/home';

expect.addSnapshotSerializer(serializer);

describe('Home', () => {
  const homeElement = renderWithProviderSnapshot(<Home />).toJSON();

  it('Renders home', () => {
    expect(homeElement).toMatchSnapshot();
  });
});
