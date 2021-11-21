import React, { useRef, useCallback } from 'react';
import { Container, Content, Background } from './styles';
// import logoImg from '../../assets/logodireto.png';
// import { Form } from '@unform/web';
// import api from '../../service/api';
import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import { toast } from 'react-toastify';
import { auth, firebase } from '../../services/firebase';

export function SignIn() {
    const history = useHistory();

    async function actionLoginGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        })
    }

    // const handleSubmit = useCallback(async (element) => {
    //     try {
    //         const { data } = await api.post('/usuarioLogin', { 
    //             usuario: element.profileObj.email
    //         }); 
            
    //         localStorage.setItem('isAuthenticated', window.btoa(JSON.stringify(data)));
    //         localStorage.setItem('userData', window.btoa(JSON.stringify(element.profileObj)))
            
    //         if (data) {
    //             history.push('/home');               
    //         } 
    //     } catch (error) {
    //         console.log(error);
    //         toast.error('you do not have permission to access the platform');
    //     }
    // }, []);

    return (
        <Container>
            <Content>
                <h1>Login</h1>
                <button onClick={actionLoginGoogle}>fazer login com o google</button>
            </Content>
            {/* <Background/> */}
        </Container>
    )
};
