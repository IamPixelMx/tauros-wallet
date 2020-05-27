import React from 'react';
import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Oops from 'components';

expect.addSnapshotSerializer(serializer);

describe('Oops', () => {
  const oopsElement = renderWithProviderSnapshot(<Oops />).toJSON();

  it('Renders oops', () => {
    expect(oopsElement).toMatchSnapshot();
  });
});
