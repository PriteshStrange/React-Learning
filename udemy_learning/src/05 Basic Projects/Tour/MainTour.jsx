import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const MainTour = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (Id) => {
    const updated = tours.filter((val) => {
      return val.id !== Id;
    });
    setTours(updated);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setTours(toursData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Tour data", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
      {loading && (
        <>
          <main>
            <Loading />
          </main>
        </>
      )}
      {tours.length === 0 && (
        <>
          <main>
            <div className="title">
              <h2>No Data Available</h2>
              <button onClick={() => fetchTours}> Refresh </button>
            </div>
          </main>
        </>
      )}
      {loading && (
        <>
          <main>
            <Loading />
          </main>
        </>
      )}
    </>
  );
};

export default MainTour;
