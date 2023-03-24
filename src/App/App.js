import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { StyledMain, Wrapper } from "./styled";

function App() {
  return (
    <Wrapper>
      <Header />
      <StyledMain>
        <Main />
      </StyledMain>
      <Footer />
    </Wrapper>
  );
}

export default App;
