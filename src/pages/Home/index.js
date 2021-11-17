import { Button } from '../../components/Button'
import { InputBox } from '../../components/InputBox';
import { Container } from './styles';

export function Home() {

  return (
    <Container>
      <Button>Add um livro a lista</Button>
        <InputBox />
        <InputBox />
        <InputBox />
    </Container>
  );
}