import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default class Button extends Component {
    static propTypes = {
      borderRadius: PropTypes.number,
      hasBorder: PropTypes.bool,
      children: PropTypes.node,
    };

    static defaultProps = {
      borderRadius: 0,
      hasBorder: false,
      children: null,
    };

    render() {
      return (
        <a
          href="https://www.google.com/"
          className={`${styles.button} ${this.props.hasBorder ? styles.hasBorder : styles.withoutBorder}`}
          style={{ borderRadius: `${this.props.borderRadius}px` }}
        >
          {this.props.children}
        </a>
      );
    }
}
