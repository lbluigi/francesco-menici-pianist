import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../containers/Layout';

export default () => (
  <>
    <Helmet>
      <title>Francesco Menici - Pianist, Composer, Arranger</title>
      <meta name="description" content="Francesco Menici è un pianista, tastierista, compositore e arrangiatore nato a Livorno nel 1984." />
    </Helmet>
    <Layout />
  </>
);
