import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import { Loader } from 'components';

expect.addSnapshotSerializer(serializer);

describe('Loader', () => {
  const loaderDefaultElement = <Loader />;

  const loaderFullScreenElement = <Loader isFullScreen />;

  const loaderCustomHeightElement = <Loader customHeight='500px' />;

  it('Renders default Loader', () => {
    const loader = renderer.create(loaderDefaultElement).toJSON();
    expect(loader).toMatchSnapshot();
  });

  it('Renders full screen Loader', () => {
    const loader = renderer.create(loaderFullScreenElement).toJSON();
    expect(loader).toMatchSnapshot();
  });

  it('Renders full screen with custom height', () => {
    const loader = renderer.create(loaderCustomHeightElement).toJSON();
    expect(loader).toMatchSnapshot();
  });
});
