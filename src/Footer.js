import React, { Component } from 'react';
import logoCopy from './logo_copy.svg';
import styles from './Footed.module.css';
import Container from './Container';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src={logoCopy} alt="logoCopy"/>
            </div>
            <ul className={styles.menu}>
              <li>How it works </li>
              <li>Create an account</li>
              <li>Support</li>
              <li>FAQ</li>
              <li>Twitter</li>
            </ul>
            <div className={styles.bottom}>Copyright 2016 MeshApp. All Rights Reserved.</div>
          </div>
        </Container>
      </div>
    );
  }
}
