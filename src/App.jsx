import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar.jsx";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          cards.map((card) => (
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span>By user {card.userId}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
