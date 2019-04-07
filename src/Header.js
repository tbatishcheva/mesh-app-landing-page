import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import styles from './Header.module.css';
import appleLogo from './apple_logo.svg';
import googlePlayLogo from './google_play_logo.svg';
import Icon from './Icon';
import Container from './Container';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul className={styles.navigation}>
              <li><a href="https://www.google.com/">Create an account</a></li>
              <li><a href="https://www.google.com/">How it works</a></li>
              <li><a href="https://www.google.com/">Support</a></li>
              <li><a href="https://www.google.com/">FAQ</a></li>
            </ul>
            <div className={styles.content}>
              <div className={styles.title}>MeshApp -</div>
              <div className={styles.subtitle}>Play Songs Like Never Before.</div>
              <div className={styles.description}>
                    Don’t leave your shopping to the last minute. The more time you have to shop around,
                    the more you can negotiate.
              </div>
              <div className={styles.buttons}>
                <Button borderRadius={100} hasBorder>
                  <Icon withMargin={true} alt="appleLogo" src={appleLogo} />
                  <span>App Store</span>
                </Button>
                <Button borderRadius={12} hasBorder>
                  <Icon withMargin={true} alt="googlePlayLogo" src={googlePlayLogo} />
                  <span>Google Play</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
