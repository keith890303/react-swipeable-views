// @flow weak

import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  const { maintainerName, maintainerUrl, repositoryName, repositoryUrl } = props;

  return (
    <footer className="site-footer">
      <span className="site-footer-owner">
        <a href={repositoryUrl}>{repositoryName}</a>
        {' is maintained by '}
        <a href={maintainerUrl}>{maintainerName}</a>.
      </span>
      <span className="site-footer-credits">
        {'This page was generated by '}
        <a href="https://pages.github.com">GitHub Pages</a>
        {' using the '}
        <a href="https://github.com/jasonlong/cayman-theme">Cayman theme</a>
        {' by '}
        <a href="https://twitter.com/jasonlong">Jason Long</a>.
      </span>
    </footer>
  );
};

Footer.propTypes = {
  maintainerName: PropTypes.string.isRequired,
  maintainerUrl: PropTypes.string.isRequired,
  repositoryName: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
};

export default Footer;
