import React from 'react';
import PropTypes from 'prop-types';
import { IconStyled, LoaderStyled, LoaderIconsStyled } from './styles';
import { TaurosDarkIcon } from 'components';

const IconSize = {
  width: '350',
  height: '170',
};

const Loader = ({ isFullScreen, customHeight }) => (
  <LoaderStyled isFullScreen={isFullScreen} customHeight={customHeight}>
    <LoaderIconsStyled>
      <IconStyled>
        <TaurosDarkIcon {...IconSize} />
      </IconStyled>
      <IconStyled>
        <TaurosDarkIcon {...IconSize} />
      </IconStyled>
    </LoaderIconsStyled>
  </LoaderStyled>
);

Loader.defaultProps = {
  isFullScreen: false,
  customHeight: null,
};

Loader.propTypes = {
  isFullScreen: PropTypes.bool,
  customHeight: PropTypes.node,
};

export default Loader;
