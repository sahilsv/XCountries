import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countries = await response.json();
      setData(countries);
      // console.log(response.data);
    } catch (err) {
      console.log("Error fetching API: " + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((country) => {
        return (
          <div key={country.cca3} className="card">
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              width={100}
              height={100}
            />
            <span>{country.name.common}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
