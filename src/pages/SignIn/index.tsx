import React from 'react';
import {Image} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';

import LogoImg from '../../assets/logo.png';
import {Container, Title} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={LogoImg} />
    <Title>Faça seu logon</Title>

    <Input name="email" icon="mail" placeholder="E-Mail" />
    <Input name="password" icon="lock" placeholder="Senha" />

    <Button onPress={() => {}}>Entrar</Button>
  </Container>
);

export default SignIn;
