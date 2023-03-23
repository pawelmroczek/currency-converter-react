import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { Main, Wrapper } from "./styled";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Body />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
