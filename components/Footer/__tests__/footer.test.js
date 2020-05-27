import React from 'react';
import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Footer from '../';

expect.addSnapshotSerializer(serializer);

describe('Footer', () => {
  const footerElement = renderWithProviderSnapshot(<Footer />).toJSON();

  it('Renders footer', () => {
    expect(footerElement).toMatchSnapshot();
  });
});
