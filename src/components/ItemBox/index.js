import { Container } from './styles';
export function ItemBox({books}) {
// export function ItemBox({books, returnRow}) {

  // function handleRowData(rowId, rowDescription) {
  //   returnRow([{id: rowId, description: rowDescription}]);
  //   // hideDialog(false);
  // }

  return (
    books.map(item => {
      return (
        <Container key={item.bk_id}>
          {/* <label>{item.bk_description}</label> */}
          <div>
            <label>
              <b>Descrição: </b><span>{item.bk_description}</span>
            </label>
            <label>
              <b>Autor:</b> <span>{item.bk_author}</span>
            </label>
          </div>
          <a
            href={item.bk_url}
            target="_blank" rel="noreferrer" 
          >
            Ler
          </a>
        </Container>
      );
    })
  );
}