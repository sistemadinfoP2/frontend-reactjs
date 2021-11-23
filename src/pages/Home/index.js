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
      bk_id: "1",
      bk_description: "Ebook",
      "bk_subdescription": "Lógica de Programação para iniciantes",
      "bk_author": "Gustavo Furtado de Oliveira Alves",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://dicasdeprogramacao.com.br/download/ebook-logica-de-programacao-para-iniciantes.pdf",
      "bk_image": null
    },
    {
      "bk_id": "2",
      "bk_description": "Programação em JAVA",
      "bk_subdescription": "PDF",
      "bk_author": "Daniela Barreiro Claro & João Bosco Mangueira Sobral",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://www.faeterj-rio.edu.br/downloads/bbv/0031.pdf",
      "bk_image": null
    },
    {
      "bk_id": "3",
      "bk_description": "Como Pogramar",
      "bk_subdescription": "5 Edição",
      "bk_author": "H.M. Deitel",
      "bk_release": "2006-04-01T03:00:00.000Z",
      "bk_volume": "v7",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://kupdf.net/download/c-como-programar-5-ordf-edi-ccedil-atilde-o-original-pdf_5903b070dc0d60dc11959ef5_pdf",
      "bk_image": null
    },
    {
      "bk_id": "4",
      "bk_description": "Python para desenvolvedores",
      "bk_subdescription": "1 Edição",
      "bk_author": "Luiz Eduardo Borges",
      "bk_release": "2009-01-01T03:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://www.livrosgratis.com.br/ler-livro-online-138504/python-para-desenvolvedores",
      "bk_image": null
    },
    {
      "bk_id": "5",
      "bk_description": "Aprendendo JavaScript",
      "bk_subdescription": "1 Edição",
      "bk_author": "Filipe Del Nero Grillo & Renata Pontin de Mattos Fortes",
      "bk_release": "2008-01-01T03:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://repositorio.usp.br/directbitstream/4cd7f9b7-7144-40f4-bfd0-7a1d9a6bd748/nd_72.pdf",
      "bk_image": null
    },
    {
      "bk_id": "6",
      "bk_description": "O futuro da indústria de software",
      "bk_subdescription": "coletânea de artigos",
      "bk_author": "indefinido",
      "bk_release": "2005-03-22T03:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://livroaberto.ibict.br/bitstream/1/895/1/O%20futuro_industria_software_perspectiva_Brasil.pdf",
      "bk_image": null
    },
    {
      "bk_id": "7",
      "bk_description": "Programação e Software",
      "bk_subdescription": "Ciência da computação",
      "bk_author": "indefinido",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "http://professores.dcc.ufla.br/~bruno/aulas/livro-normal.pdf",
      "bk_image": null
    },
    {
      "bk_id": "8",
      "bk_description": "Estruturas de dados",
      "bk_subdescription": "Unicamp",
      "bk_author": "Ivan Luiz Marques Ricarte",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://wiki.dca.fee.unicamp.br/wiki/images/0/01/EstruturasDados.pdf",
      "bk_image": null
    },
    {
      "bk_id": "9",
      "bk_description": "Algoritmos e Programação",
      "bk_subdescription": "e-Tec",
      "bk_author": "Adolfo José G. S. Baudson & Francisco C. R. de Araújo",
      "bk_release": "2013-03-01T03:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://www.ifmg.edu.br/ceadop3/apostilas/algoritmos-e-programacao",
      "bk_image": null
    },
    {
      "bk_id": "10",
      "bk_description": "Linguagem C++",
      "bk_subdescription": "",
      "bk_author": "Silvio do lago Pereira",
      "bk_release": "1999-01-01T03:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://www.ime.usp.br/~slago/slago-C++.pdf",
      "bk_image": null
    },
    {
      "bk_id": "11",
      "bk_description": "Lógica de Programação para iniciantes",
      "bk_subdescription": "Ebook",
      "bk_author": "Gustavo Furtado de Oliveira Alves",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://dicasdeprogramacao.com.br/download/ebook-logica-de-programacao-para-iniciantes.pdf",
      "bk_image": null
    },
    {
      "bk_id": "12",
      "bk_description": "PostgreSQL Pratico",
      "bk_subdescription": "Livros Grátis ",
      "bk_author": "Ribamar FS",
      "bk_release": "2006-09-17T03:00:00.000Z",
      "bk_volume": "v8.1.4",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "https://www.livrosgratis.com.br/ler-livro-online-62319/postgresql-pratico--versao-814",
      "bk_image": null
    },
    {
      "bk_id": "13",
      "bk_description": "Programação e Software",
      "bk_subdescription": "Ciência da computação",
      "bk_author": "indefinido",
      "bk_release": "2000-01-01T02:00:00.000Z",
      "bk_volume": "v1",
      "bk_dateregistration": "2021-11-14T19:05:40.260Z",
      "bk_url": "http://professores.dcc.ufla.br/~bruno/aulas/livro-normal.pdf",
      "bk_image": null
    }
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