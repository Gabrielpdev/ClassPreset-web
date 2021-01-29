import { GetStaticPaths, GetStaticProps } from 'next';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers';
 
import useSwr from 'swr';

import Header from '../components/Header';
import ModalGenerate from '../components/Modal/ModalGenerate';
import ModalView from '../components/Modal/ModalView';

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

// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Dashboard ( { classes }: IProps ) {
  const [openGenerateModal, setOpenGenerateModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  // const [ user ] = useState(props || '');
  // console.log(classes)
  // const { data } = useSwr('/api/classes', fetcher)

  const generateLink = useCallback(() => {
    console.log("GERA O LINK");
    toggleGenerateModal();
  }, [])

  const deleteClass = useCallback(() => {
    if (confirm("Deseja deletar essa turma ?")){
      console.log("DELETAR TURMA")
    }
  }, []) 

  const toggleGenerateModal = useCallback(() => {
    setOpenGenerateModal(value => !value);
  }, [])
 
  const toggleViewModal = useCallback(() => {
    setOpenViewModal(value => !value);
  }, [])
  
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
            {classes?.map((classe, index )=> (
              <Class key={classe.id}>
                <ButtonsList>
                  {index === 0 && (
                    <>
                      <ModalView
                        isOpen={openViewModal}
                        setIsOpen={toggleViewModal}
                        classId={classe.id}
                      />
                      <ModalGenerate
                        isOpen={openGenerateModal}
                        setIsOpen={toggleGenerateModal}
                        generatedLink='teste'
                      />
                    </>
                  )}
                  <Button type='button' onClick={toggleViewModal} layoutType='view' >Visualizar</Button>
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

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const response = await fetch('http://localhost:3000/api/classes');
  const classes = await response.json();

  return {
    props: {
      classes
    },
    revalidate: 1 // Após 5 segundos o next gera
    //uma nova versão da página
  }
}

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