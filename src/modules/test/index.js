import React, {useEffect} from 'react';

import Amplify, { API } from 'aws-amplify';
import aws_exports from '../../aws-exports';

import { Container } from './styles';

export default function test() {

  async function getEncoder() {
    const path = '/encoder';
    const response = await API.get('encoder', path);
    console.log(response);
  }

  useEffect(() => {
    Amplify.configure(aws_exports);
    getEncoder();
  }, []);

  return (
    <Container />
  );
}
