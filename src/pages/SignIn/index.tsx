import React from 'react';
import {Image} from 'react-native';

import {Container} from './styles';
import LogoImg from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={LogoImg} />
  </Container>
);

export default SignIn;
