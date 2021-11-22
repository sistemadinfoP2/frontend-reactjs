import React from 'react';
import { Container, Content, Button } from './styles';
import { useHistory } from 'react-router-dom';
import googleIconImg from '../../assets/google-icon.svg';
import estacioImg from '../../assets/estacio-bg.png';
import { auth, firebase } from '../../services/firebase';

export function SignIn() {
    const history = useHistory();

    async function actionLoginGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(({ credential }) => {
            console.log(credential.accessToken);
            localStorage.setItem('@TokenLibrary', credential.accessToken);

            history.push('/home');
        })
    }

    return (
        <Container>
            <Content>
                <div>
                    <img src={estacioImg} alt='Logo Estácio' />
                    <h1
                        style={{color: '#fff', fontFamily: 'Helvetica', fontWeight: 'normal', fontSize: '1.5rem', margin: '0px 0px 16px'}}
                    >Login Biblioteca</h1>
                    <Button
                        onClick={actionLoginGoogle}
                        className='create-room'
                    >
                        <img src={googleIconImg} alt='Logo do Google' />
                        Continuar com o Google
                    </Button>
                </div>
            </Content>
        </Container>
    )
};
