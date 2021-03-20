import "./index.css";
import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { item22, item23 } from "../../Assets";

const About = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | About";
  });

  const team = [
    {
      image: "unicorn1.png",
      name: "Liam Johnson",
      position: "Owner",
    },
    {
      image: "unicorn2.png",
      name: "Olivia Brown",
      position: "Co-owner",
    },
    {
      image: "unicorn3.png",
      name: "Emma Smith",
      position: "Baker",
    },
    {
      image: "unicorn4.png",
      name: "Ava Miller",
      position: "Baker",
    },
    {
      image: "unicorn5.png",
      name: "William Garcia",
      position: "Staff",
    },
    {
      image: "unicorn6.png",
      name: "Oliver Jones",
      position: "Staff",
    },
  ];

  return (
    <Container>
      {/* HEADER */}
      <Row>
        <Col>
          <h3 className="about-header">About Us</h3>
        </Col>
      </Row>
      {/* PARAGRAPH1 */}
      <Row className="about-par1">
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
      {/* TEAM */}
      <h5 className="about-team-name">The Team</h5>
      <Row>
        {team.map((data) => (
          <Col className="about-team-col">
            <div>
              <div>
                <Image
                  alt="members"
                  src={require(`../../Assets/Image/${data.image}`).default}
                  className="about-team-img"
                />
              </div>
              <div className="about-team-name">{data.name}</div>
              <div className="about-team-position">{data.position}</div>
            </div>
          </Col>
        ))}
      </Row>
      <h5 className="about-section">Vision, Mission and Goal</h5>
      <Row>
        <Col xs={3} lg={4}>
          <Image src={item22} className="about-img" />
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
      <h5 className="about-section">Ingredients Used</h5>
      <Row>
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
        <Col xs={3} lg={4}>
          <Image src={item23} className="about-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
