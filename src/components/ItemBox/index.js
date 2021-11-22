import { Container } from './styles';
export function ItemBox({ key, description, author, url }) {
  return (
    <Container key={key}>
      <div>
        <label>
          <b>Descrição: </b><span>{description}</span>
        </label>
        <label>
          <b>Autor:</b> <span>{author}</span>
        </label>
      </div>
      <a
        href={url}
        target="_blank"
      >
        Ler
      </a>
    </Container>
  );
}
