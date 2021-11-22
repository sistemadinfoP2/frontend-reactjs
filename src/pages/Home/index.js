import { useEffect, useState } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';
import { ItemBox} from "../../components/ItemBox";

export function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks();
  }, [])

  async function getBooks() {
    try {
      const { data } = await api.get('/');
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }

  function logout() {
    localStorage.removeItem('@TokenLibrary');
    window.location.reload();
  }

  return (
    <Container>
      <button onClick={logout}>Sair</button>
      <h1
        style={{maxWidth: '400px', margin: '0 auto', fontFamily: 'Helvetica', marginTop: '40px'}}>
          Biblioteca Online
      </h1>
      <div style={{maxWidth: '400px', margin: '30px auto'}}>
        <ItemBox books={data} />
      </div>
    </Container>
  );
}