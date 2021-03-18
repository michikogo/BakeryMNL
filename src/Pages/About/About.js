import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  item22,
  item23,
  unicorn1,
  unicorn2,
  unicorn3,
  unicorn4,
  unicorn5,
  unicorn6,
} from "../../Assets";
const About = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | About";
  });
  return (
    <Container>
      <Row>
        <Col>
          <h3 style={{ textAlign: "center" }}>About Us</h3>
        </Col>
      </Row>
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          feugiat, mi vitae elementum vehicula, orci turpis dictum ipsum, at
          porttitor lorem sapien pulvinar lorem. Proin ut hendrerit odio.
          Vestibulum sollicitudin molestie nisi, id convallis nisi. Donec
          commodo auctor finibus. Integer porta finibus nisi, in vehicula arcu
          semper facilisis. Nunc rhoncus semper egestas. Donec justo arcu,
          scelerisque in risus vulputate, sodales fringilla neque. Suspendisse
          pulvinar ullamcorper consectetur. Vestibulum eget dolor dui. Sed et
          nisl ut nisi interdum pellentesque. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Sed vitae est eget ex euismod malesuada
          ac egestas libero. Nulla quis pretium sapien, nec semper nibh.
        </Col>
      </Row>
      <h5 style={{ paddingTop: "30px", textAlign: "center" }}>The Team</h5>
      <Row>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <Image
              src={unicorn1}
              style={{
                height: "100px",
                width: "100px",
              }}
            />
          </div>
          <div style={{ fontWeight: "bold" }}>Liam Johnson</div>
          <div style={{ fontStyle: "italic" }}>Owner</div>
        </Col>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <div>
              <Image
                src={unicorn2}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold" }}>Olivia Brown</div>
            <div style={{ fontStyle: "italic" }}>Co-owner</div>
          </div>
        </Col>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <div>
              <Image
                src={unicorn3}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold" }}>Emma Smith</div>
            <div style={{ fontStyle: "italic" }}>Baker</div>
          </div>
        </Col>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <div>
              <Image
                src={unicorn4}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold" }}>Ava Miller</div>
            <div style={{ fontStyle: "italic" }}>Staff</div>
          </div>
        </Col>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <div>
              <Image
                src={unicorn5}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold" }}>William Garcia</div>
            <div style={{ fontStyle: "italic" }}>Staff</div>
          </div>
        </Col>
        <Col style={{ paddingTop: "30px", textAlign: "center" }}>
          <div>
            <div>
              <Image
                src={unicorn6}
                style={{
                  height: "100px",
                  width: "100px",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold" }}>Oliver Jones</div>
            <div style={{ fontStyle: "italic" }}>Staff</div>
          </div>
        </Col>
      </Row>
      <h5 style={{ paddingTop: "30px", textAlign: "center" }}>
        Vision, Mission and Goal
      </h5>
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          <Image
            src={item22}
            style={{
              height: "300px",
              width: "480px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col>
          Suspendisse tempor dictum augue, vel congue nisl lacinia sit amet.
          Curabitur nisl mi, cursus tristique purus eget, maximus fermentum
          nibh. Integer porttitor non elit sit amet maximus. Aliquam nisl diam,
          molestie a odio ut, consectetur egestas risus. Phasellus lacinia
          bibendum leo, in pellentesque tellus venenatis eget. Maecenas lacinia,
          velit eu aliquam fermentum, nibh nunc blandit ante, sed consectetur
          ante nunc vitae neque. Nam facilisis augue eget felis malesuada
          faucibus. Sed porttitor orci dolor. Phasellus non leo ut sem pulvinar
          pellentesque. In porttitor quis velit eu congue. Nulla eu auctor
          dolor. Ut sollicitudin magna vel felis posuere sagittis. Duis
          vulputate id purus non convallis.
        </Col>
      </Row>
      <h5 style={{ paddingTop: "30px", textAlign: "center" }}>
        Ingredients Used
      </h5>
      <Row style={{ paddingTop: "30px" }}>
        <Col>
          Proin iaculis pulvinar ligula, vitae consectetur libero pulvinar vel.
          Etiam accumsan tempor orci, et congue purus elementum sit amet. Duis
          imperdiet ac sapien eu mattis. Aenean a accumsan neque, et congue
          odio. Fusce nec malesuada velit. Aenean ac velit in est rhoncus
          bibendum nec sit amet quam. Aliquam a sapien eget justo molestie
          vehicula quis sed mi. Vivamus maximus ornare semper. In pulvinar
          dictum scelerisque. Pellentesque pulvinar non diam nec porta. Sed
          venenatis purus sapien, ac ultrices turpis facilisis ut. Donec
          eleifend iaculis fermentum.
        </Col>

        <Col>
          <Image
            src={item23}
            style={{
              height: "240px",
              width: "480px",
              objectFit: "cover",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
