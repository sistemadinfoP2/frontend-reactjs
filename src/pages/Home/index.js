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

  const mockData = [
    {
      bk_id: 1,
      bk_description: 'Programação I',
      bk_author: 'Faberio 1',
      bk_url: 'https://symbolismofthings.com/wp-content/uploads/2019/06/numero-1-significado-e1561388929274.jpg'
    },
    {
      bk_id: 2,
      bk_description: 'Programação II',
      bk_author: 'Faberio 2',
      bk_url: 'https://symbolismofthings.com/wp-content/uploads/2019/06/numero-2-significado-e1561140121607.jpg'
    },
    {
      bk_id: 3,
      bk_description: 'Programação III',
      bk_author: 'Faberio 3',
      bk_url: 'https://symbolismofthings.com/wp-content/uploads/2019/06/numero-3-significado-e1561138352539.jpg'
    },
  ]

  return (
    <Container>
      <button onClick={logout}>Sair</button>
      <h1
        style={{maxWidth: '400px', margin: '0 auto', fontFamily: 'Helvetica', marginTop: '40px', color: '#fff', fontWeight: 'bold'}}>
          Todos os livros
      </h1>
      <div style={{maxWidth: '400px', margin: '30px auto'}}>
        {mockData.map(item => (
          <ItemBox
            key={item.bk_id}
            description={item.bk_description}
            author={item.bk_author}
            url={item.bk_url}
          />
        ))}

      </div>
    </Container>
  );
}