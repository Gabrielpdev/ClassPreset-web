import { GetStaticPaths, GetStaticProps } from 'next';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers';
 
import useSwr from 'swr';

import Header from '../components/Header';
import ModalGenerate from '../components/Modal/ModalGenerate';

import { 
  Container,
  Title,
  NumberClasses,
  ButtonAddClass,
  ContainerClasses,
  Class,
  ButtonsList,
  Button,
  InfoClass,
  ClassName,
  ClassStudent,
  } from '../styles/pages/Dashboard';

interface IStudent{
  id: string,
  name: string
}

interface IClasse {
  id: string,
  name: string,
  students: IStudent[]
}

interface IProps {
  classes: IClasse[]
}

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Dashboard ( { classes }: IProps ) {
  const [openGenerateModal, setOpenGenerateModal] = useState(false);
  // const [ user ] = useState(props || '');
  // console.log(classes)
  const { data } = useSwr('/api/classes', fetcher)

  function generateLink(): void {
    console.log("GERA O LINK");
    toggleModal();
  }

  function deleteClass(): void {
    if (confirm("Deseja deletar essa turma ?")){
      console.log("DELETAR TURMA")
    }
  }

  function toggleModal(): void {
    setOpenGenerateModal(!openGenerateModal);
  }
  
  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <Title>
            <h2>Turmas vinculadas</h2>
            <NumberClasses>
              9 Turmas
              <ButtonAddClass>
                +
              </ButtonAddClass>
            </NumberClasses>
          </Title>
        
          <ContainerClasses>
            {data?.map(classe => (
              <Class key={classe.id}>
                <ButtonsList>
                  <Button type='button' layoutType='view' >Visualizar</Button>
                  <ModalGenerate
                    isOpen={openGenerateModal}
                    setIsOpen={toggleModal}
                    generatedLink='teste'
                  /> 
                  <Button type='button' onClick={generateLink} layoutType='generate' >Gerar Link</Button>
                  <Button type='button' layoutType='edit' >Editar</Button>
                  <Button type='button' onClick={deleteClass} layoutType='delete' >Deletar</Button>
                </ButtonsList>
                <InfoClass>
                  <ClassName>{classe.name}</ClassName>
                  <ClassStudent>{classe.students.length} alunos</ClassStudent>
                </InfoClass>
              </Class>
            ))}
          </ContainerClasses>
        </div>
      </main>
    </Container>
  )
}


// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(`http://localhost:3333/api/classes`);
//   const classes = await response.json();

//   const paths = classes.map( classe => ({
//     params: { slug: classe.id}
//   }))

//   return {
//     paths,
//     fallback: true, // Quando o primeiro usuário tentar acessar uma rota
// 		//que ainda nao foi gerada estaticamente, ele tenta gerar.
//   }
// }

// export const getStaticProps: GetStaticProps<IProps> = async (context) => {

// const response = await fetch(`/api/classes`);
//   const classes = await response.json();

//   return {
//     props: {
//       classes
//     },
//     revalidate: 60 // Após 60 segundos o next gera
//     //uma nova versão da página
//   }
// }


// Dashboard.getInitialProps = async ({ req, res }) => {
  // const { user } = parseCookies(req)
  
  // if (user) {
  //   const userObject = Object.assign(JSON.parse(user) , { type: 'teacher' })
  //   if(typeof window === 'undefined'){
  //     userObject.type === 'student' && res.writeHead(302, { Location: '/home' })
  //     res.end()
  //   }else{
  //     userObject.type === 'student' && Router.push('/home')
  //   }
  //   return userObject;
  // }else {
  //   if(typeof window === 'undefined'){
  //     res.writeHead(302, { Location: '/' })
  //     res.end()
  //   }else{
  //     Router.push('/')
  //   }
    // return {}
  // };
// }