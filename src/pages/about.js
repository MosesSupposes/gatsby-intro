import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>This is my personal website.</p>
    {/* <a href="/">&larr; back to home</a> */}
    {/* This works, but it makes the entire page reload */}
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
