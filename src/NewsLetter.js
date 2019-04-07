import React, { Component } from 'react';
import styles from './NewsLetter.module.css';
import Container from './Container';

export default class NewsLetter extends Component {
  render() {
    return (
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            Join us now
          </div>
          <div className={styles.mainText}>
            Join us along the way of becoming great! We will send you emails containing
            information of how you can help us. We don’t spam.
          </div>
          <form>
            <label>
              <input type="text" name="name" placeholder="Your email address" />
            </label>
            <input type="submit" value="JOIN US" />
          </form>
        </div>
      </Container>
    );
  }
}
