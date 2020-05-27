import React from 'react';
import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Splash from 'components';

expect.addSnapshotSerializer(serializer);

describe('Splash', () => {
  const splashElement = renderWithProviderSnapshot(<Splash />).toJSON();

  it('Renders splash', () => {
    expect(splashElement).toMatchSnapshot();
  });
});
