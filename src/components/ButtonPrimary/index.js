import { Container } from './styles';

export function ButtonPrimary({children, ...rest}) {
  return (
    <Container {...rest}>{children}</Container>
  );
}