import React from 'react';
import PropTypes from 'prop-types';
import { IconStyled, LoaderStyled, LoaderIconsStyled } from './styles';
import { SaladIcon, OrientalIcon } from 'components';

const IconSize = {
  width: '25rem',
  height: '25rem',
};

const Loader = ({ isFullScreen, customHeight }) => (
  <LoaderStyled isFullScreen={isFullScreen} customHeight={customHeight}>
    <LoaderIconsStyled>
      <IconStyled>
        <SaladIcon {...IconSize} />
      </IconStyled>
      <IconStyled>
        <OrientalIcon {...IconSize} />
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
