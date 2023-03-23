import { StatusDiv } from "../styled";

const Problem = () => (
  <StatusDiv problem={true}>
    <h2>Hmm... Coś poszło nie tak.</h2>
    <p>
      Sprawdź, czy masz połączenie z internem. Jeśli masz... to wygląda na to,
      że to nasza wina. Może spróbuj ponownie później?
    </p>
  </StatusDiv>
);

export default Problem;
