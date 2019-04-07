import React, { Component } from 'react';
import Button from './Button';
import group2 from './png_box.png';
import group from './png_heart.png';
import group4 from './png_check.png';
import styles from './howItWorks.module.css';
import appleLogo from './apple_logo.svg';
import object from './google_play_logo.svg';
import Icon from './Icon';
import Container from './Container';

export default class HowItWorks extends Component {
  render() {
    return (
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>How it works</div>
          <ul className={styles.features}>
            <li>
              <div><img src={group2} alt='group_2'/></div>
              <div className={styles.subtitle}>Create an account</div>
            </li>
            <li>
              <div><img src={group} alt='group'/></div>
              <div className={styles.subtitle}>Favorite the playlists</div>
            </li>
            <li>
              <div><img src={group4} alt='group_4'/></div>
              <div className={styles.subtitle}>Listen</div>
            </li>
          </ul>
          <div className={styles.buttons}>
            <Button borderRadius={100} hasBorder={false}>
              <Icon withMargin={true} alt="appleLogo" src={appleLogo} />
              <span>App Store</span>
            </Button>
            <Button borderRadius={12} hasBorder={false}>
              <Icon withMargin={true} alt="object" src={object} />
              <span>Google Play</span>
            </Button>
          </div>
        </div>
      </Container>
    );
  }
}