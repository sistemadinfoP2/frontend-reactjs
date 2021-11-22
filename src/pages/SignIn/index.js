import React from 'react';
import { Container, Content, Button } from './styles';
import { useHistory } from 'react-router-dom';
import googleIconImg from '../../assets/google-icon.svg';
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
                <h1
                    style={{color: '#fff'}}
                >Login</h1>
                <Button
                    onClick={actionLoginGoogle}
                    className='create-room'
                >
                    <img src={googleIconImg} alt='Logo do Google' />
                    Logar com o Google
                </Button>
            </Content>
        </Container>
    )
};
