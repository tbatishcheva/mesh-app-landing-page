import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

class Container extends Component {
    static propTypes = {
      children: PropTypes.node,
    };

    static defaultProps = {
      children: null,
    };

    render() {
      return (
        <div className={styles.main}>
          {this.props.children}
        </div>
      );
    }
}

export default Container;