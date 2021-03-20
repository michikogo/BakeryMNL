import "./index.css";
import { Container, Image } from "react-bootstrap";
import { baking } from "../../Assets";

const PageNotFound = () => {
  return (
    <Container>
      <Image alt="baking" src={baking} className="notfound-background" />
      <div className="notfound-div">
        <h1 className="notfound-text">Page Not Found</h1>
      </div>
    </Container>
  );
};

export default PageNotFound;
