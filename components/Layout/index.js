import { Container } from "@material-ui/core";
import Header from "./Header/index";
import Footer from "./Footer/index";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
export default Layout;
