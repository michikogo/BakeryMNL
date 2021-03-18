import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | Home";
  });
  return (
    <div>
      <h1>Home Page</h1>
      <h3>Tasks:</h3>
      <ul>
        <li>home, about, Not Found page - make design</li>
        <li>order page - phone numbser should be numbers only</li>
        <li>Create a Read Me</li>
        <li>research about deployment</li>
        <li style={{ textDecoration: "line-through" }}>Tab Title Change</li>
        <li style={{ textDecoration: "line-through" }}>
          Redirect go to top of the page
        </li>
        <li style={{ textDecoration: "line-through" }}>
          order page - add remove button for items
        </li>
        <li style={{ textDecoration: "line-through" }}>
          product - button cant be clicked if the user hasnt place quantity
        </li>
        <li style={{ textDecoration: "line-through" }}>
          item page - add quantity in db
        </li>
        <li style={{ textDecoration: "line-through" }}>
          order page - place loading on cart and error when cant be fetched
        </li>

        <li style={{ textDecoration: "line-through" }}>
          order page - remove when bought
        </li>
      </ul>
    </div>
  );
};

export default Home;
