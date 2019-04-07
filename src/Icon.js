import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.css';

class Icon extends Component {
  static propTypes = {
    withMargin: PropTypes.bool,
    alt: PropTypes.string.isRequired,
    src: PropTypes.any,
  };

  static defaultProps = {
    withMargin: false,
    src: null,
  };

  render() {
    return (
        <img
          className={`${this.props.withMargin ? styles.withMargin : styles.withoutMargin}`}
          alt={this.props.alt}
          src={this.props.src}
        />
    );
  }
}

Icon.propTypes = {};

export default Icon;
