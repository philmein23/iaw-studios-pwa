import React from 'react';
import Navbar from './Navbar';

import { createElement } from 'glamor/react';
import { css } from 'glamor';
/* @jsx createElement */

export default function Header() {
  return (
    <div
      className="ui-header"
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5em',
        textAlign: 'center',
        backgroundColor: '#FFF',
        boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
        marginBottom: '1em'
      }}
    >
      <div
        css={{
          fontFamily: 'freight-sans-pro',
          fontSize: '2rem',
          fontWeight: 700,
          color: '#070707',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}
      >
        Illa Art Workz Studio
      </div>
      <Navbar />
    </div>
  );
}
