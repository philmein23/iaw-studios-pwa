import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

const link = css({
  '> a': {
    fontFamily: 'proxima-nova',
    color: '#070707',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '1rem 0.5rem',
    width: '100%',
    height: '100%'
  },
  '> a:hover': {
    backgroundColor: '#070707',
    color: '#FFF',
    padding: '1rem 0.5rem'
  }
});

const grid = css({
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '10px',
  alignItems: 'center'
});

export default function Navbar() {
  return (
    <Fragment>
      <nav className="main-nav" css={[{ ...link }, { ...grid }]}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </Fragment>
  );
}
