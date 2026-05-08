import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const URL = "http://localhost:5000";
  const [fetchedData, setFetchedData] = useState("");
  const [success, setSuccess] = useState(false);
  const handleFetchServer = async () => {
    try {
      console.log("Fetching Data From Server...", URL);
      const rawData = await fetch(URL + "/fetch/me");
      const data = await rawData.json();
      setFetchedData(data);
      console.log("Data Fetched Successfully:", data);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log("Error Fetching Data:", error);
    }
  };

  const handleFetchWeb = async () => {
    try {
      const rawData = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const data = await rawData.json();
      console.log(data.completed);
      setFetchedData(data);
      setSuccess(true);
    } catch (error) {
      setSuccess(False);
      console.log("Error Fetching Data:", error);
    }
  };

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button type="button" className="counter" onClick={handleFetchServer}>
          Fetch From Server
        </button>
        <button type="button" className="counter" onClick={handleFetchWeb}>
          Fetch From Web
        </button>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
      <div>
        {success ? (
          fetchedData.name ? (
            <>
              <p>{fetchedData.name}</p>
              <p>{fetchedData.email}</p>
              <p>{fetchedData.age}</p>
            </>
          ) : (
            <>
              <p>{fetchedData.userId}</p>
              <p>{String(fetchedData.completed)}</p>
              <p>{fetchedData.title}</p>
            </>
          )
        ) : (
          <p>No Data</p>
        )}
      </div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
