import { useEffect, useState } from 'react';
import { Container } from './styles';

import { Api } from '../../service/Api';
import { ItemBox} from "../../components/ItemBox";

export function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks();
  }, [])

  async function getBooks() {
    try {
      const { data } = await Api.get('/');
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
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