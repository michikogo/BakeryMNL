import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | About";
  });
  return (
    <div>
      <h1>About Page</h1>
      <div>
        <h1>hello world</h1>
      </div>
    </div>
  );
};

export default About;
