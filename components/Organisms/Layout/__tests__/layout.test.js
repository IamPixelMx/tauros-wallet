import serializer from 'jest-emotion';

import { renderWithProviderSnapshot } from 'jest-utils';
import Layout from 'components';

expect.addSnapshotSerializer(serializer);

describe('Layout', () => {
  const layoutElement = renderWithProviderSnapshot(<Layout />).toJSON();

  it('Renders layout', () => {
    expect(layoutElement).toMatchSnapshot();
  });
});
