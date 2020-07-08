import React from 'react';
import Link from 'next/link';
import { jsx } from '@emotion/core';
import BlockHead from '../templates/BlockHead';
/** @jsx jsx */

export default (props) => (
  <header
    css={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '3rem 0 1rem',
    }}
  >
    <BlockHead heading={props.heading} subheading={props.subheading} justifyContent="center" />
  </header>
);
