import React from 'react';
import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Navbar from 'components';

expect.addSnapshotSerializer(serializer);

describe('Navbar', () => {
  const navbarElement = renderWithProviderSnapshot(<Navbar />).toJSON();

  it('Renders navbar', () => {
    expect(navbarElement).toMatchSnapshot();
  });
});
