import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './home.scss';
import { FormattedMessage } from 'react-intl';
import locale from './locale';

export default class Article extends PureComponent {
  render () {
    const { title, text, icon } = this.props;

    return (
      <article className={styles['article-container']}>
        <div className={styles['icon-container']}>
          <img src={icon} alt="not found" />
        </div>
        <h5><FormattedMessage {...locale[title]} /></h5>
        <p><FormattedMessage {...locale[text]} /></p>
      </article>
    );
  }
}
