import React, { Component } from 'react';
import styles from './Features.module.css';
import Container from './Container';

export default class Features extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.features}>
            <div className={styles.content}>
              <div className={styles.title}>Download, Play, Enjoy.</div>
              <div className={styles.subtitle}>Better than Spotify.</div>
              <div className={styles.mainText}>
                   White Gold began gaining popularity in the early 1900’s as an alternative to platinum. Platinum was steadily becoming more fashionable, but because of its rarity many could not afford it. Then, during World War II the government put a ban on the use of Platinum for any non-military functions and the demand for White Gold skyrocketed.
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
