import Router from 'next/router';
import Image from 'next/image';
import { useState, useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { parseCookies } from '../helpers';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../hooks/AuthProvider';
import { useToast } from '../hooks/ToastProvider';

import Switcher from '../components/Switcher';
import Input from '../components/Input';
import getValidationErrors from '../utils/getValidationErrors';

import { 
  Container, 
  Title,
  LogoContainer, 
  Logo,
  BottomLeftMobile,
  BottomRightMobile,
  TopLeftMobile,
  TopRightMobile,
  BottomRight,
  TopRight,
  Form,
  FormTitle,
  FormOptions,
  FormIdentityField,
  FormIdentityFieldTitle,
  FormIdentityFieldButton,
  Loading
} from '../styles/pages/Login';

interface SignInFormData {
  identify: string;
  password: string;
}

export default function Login (props) {
  const { redirect } = props
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const recurrences = [
    {
      label: 'Matrícula',
      value: 'registration'
    },
    {
      label: 'CPF',
      value: 'cpf'
    },
    {
      label: 'Celular',
      value: 'cellphone'
    }
  ];
  const [selectedRecurrency, setSelectedRecurrency] = useState(recurrences[0]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          identify: 
            (
              selectedRecurrency.value === 'registration' ? 
              Yup.number().test('len', 'Necessário 10 números', val => !val || (val && val.toString().length === 10)).typeError('Somente números') : 
              Yup.number().test('len', 'Necessário 11 números', val => !val || (val && val.toString().length === 11)).typeError('Somente números')
            ),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setLoading(true)
        await signIn({
          identify: data.identify,
          password: data.password,
          choice: selectedRecurrency.value
        });
        
        setLoading(false)
        Router.push('/home');
      } catch (err) {
        setLoading(false)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais',
        });
      }
    },
    [signIn, selectedRecurrency],
  );

  return (
    <Container>
      {redirect === false && (
        <>
          <LogoContainer>
            <Title>Present Class</Title>
            <Logo>
              <Image 
                alt="Mountains"
                src="/logo.svg"
                layout="responsive"
                width={700}
                height={475}
              />
            </Logo>

            <BottomLeftMobile>
              <svg width="176" height="157" viewBox="0 0 176 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.408 149.095L176 157L0 157L0 -5.90086e-06L4.86522 22.1929L10.2992 41.2414C16.6729 63.5842 33.7818 81.2691 55.9013 88.379C60.2748 89.7847 64.4079 91.8502 68.1577 94.5039L75.413 99.6385C88.2769 108.742 98.7272 120.845 105.859 134.898C109.715 142.497 116.989 147.78 125.408 149.095Z" fill="#2A327D"/>
              </svg>
            </BottomLeftMobile>

            <BottomRightMobile>
              <svg width="210" height="154" viewBox="0 0 210 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M208.55 19.8179L210 9.17912e-06V154L-2.74181e-06 151.793C17.2346 151.974 34.2958 148.341 49.9611 141.153L62.6069 135.351C68.629 132.588 74.3664 129.242 79.7371 125.362C86.9494 120.151 95.1422 116.455 103.822 114.496L107.97 113.559C123.089 110.147 137.409 103.855 150.15 95.0289L175.702 77.3258C194.781 64.1074 206.857 42.967 208.55 19.8179Z" fill="#2A327D"/>
              </svg>
            </BottomRightMobile>

            <TopLeftMobile>
              <svg width="196" height="82" viewBox="0 0 196 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7325 74.7643L0 82L0 -1L196 1.62105C180.018 1.40733 164.279 5.55293 150.476 13.6123L137.716 21.0626C131.999 24.4006 126.658 28.344 121.784 32.8247C114.94 39.117 106.725 43.7293 97.7889 46.296L88.4874 48.9678C78.7665 51.7601 68.7726 53.4945 58.6794 54.1409L48.9168 54.7662C32.8167 55.7974 17.7222 62.9531 6.7325 74.7643Z" fill="#2A327D"/>
              </svg>
            </TopLeftMobile>

            <TopRightMobile>
              <svg width="86" height="146" viewBox="0 0 86 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8119 2.48294L-2.50339e-06 -1L86 -1L86 146L84.4951 127.618C84.0918 122.692 82.5933 117.919 80.109 113.646C77.7533 109.595 76.0565 105.196 75.0819 100.612L74.1086 96.0337C73.0312 90.9662 71.1112 86.1155 68.4284 81.6835L65.143 76.2558C63.4051 73.3846 61.4051 70.6805 59.1688 68.178L52.8211 61.0748C42.6268 49.6673 35.6404 35.7601 32.5744 20.7715C30.7257 11.7336 23.792 4.59458 14.8119 2.48294Z" fill="#2A327D"/>
              </svg>
            </TopRightMobile>

            <BottomRight>
              <svg width="407" height="293" viewBox="0 0 407 293" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M404.213 38.4676L407 0.499987V298L-3.67761e-05 293.737C33.4046 294.087 66.4752 287.064 96.8553 273.17L121.342 261.971C133.011 256.635 144.131 250.171 154.543 242.673C168.519 232.609 184.384 225.472 201.186 221.692L209.258 219.876C238.56 213.283 266.323 201.123 291.037 184.056L340.393 149.972C377.45 124.382 400.917 83.3807 404.213 38.4676Z" fill="#2A327D"/>
              </svg>
            </BottomRight>

            <TopRight>
              <svg width="264" height="438" viewBox="0 0 264 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.7519 -0.295444L-1.4782e-05 -11L264 -11L264 438L259.383 381.885C258.143 366.82 253.541 352.225 245.914 339.175C238.684 326.804 233.474 313.359 230.48 299.348L227.496 285.381C224.189 269.904 218.299 255.095 210.074 241.574L199.961 224.951C194.635 216.195 188.508 207.952 181.66 200.327L162.105 178.554C130.842 143.746 109.401 101.249 99.9799 55.4213C94.3146 27.8638 73.1459 6.1139 45.7519 -0.295444Z" fill="#2A327D"/>
              </svg>
            </TopRight>

          </LogoContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>

          <FormOptions className={selectedRecurrency.value}>
            <Switcher
              value={selectedRecurrency.value}
              onChange={setSelectedRecurrency}
              options={recurrences}
            />
          </FormOptions>
        
          <FormIdentityField>
            <FormIdentityFieldTitle>{selectedRecurrency.label}</FormIdentityFieldTitle>
            <Input
              name="identify"
              icon={FiMail}
              placeholder={`Digite o(a) ${selectedRecurrency.label}`}
            />
            <FormIdentityFieldTitle>Senha</FormIdentityFieldTitle>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Digite sua senha"
            />

            <FormIdentityFieldButton type="submit">{
            loading ? (
                <Loading>
                  <span className="circle circle-1"></span>
                  <span className="circle circle-2"></span>
                  <span className="circle circle-3"></span>
                  <span className="circle circle-4"></span>
                  <span className="circle circle-5"></span>
                  <span className="circle circle-6"></span>
                  <span className="circle circle-7"></span>
                  <span className="circle circle-8"></span>
                </Loading>
              ) : (
                'Entrar'
              )
            }
            </FormIdentityFieldButton>
          </FormIdentityField>
        </Form>
        </>
      )}
    </Container>
  )
}

Login.getInitialProps = async ({ req, res }) => {
  const { user } = parseCookies(req)
  
  if (user) {
    if(typeof window === 'undefined'){
      res.writeHead(302, { Location: '/home' })
      res.end()
    }else{
      Router.push('/home')
    }
    return{ redirect : true };
  };
  return{ redirect : false };
}