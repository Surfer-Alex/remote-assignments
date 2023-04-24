import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`
        );
        const parsedData = await res.json();
        setLoading(false);
        setData((pre) => [...pre, ...parsedData]);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [page]);

  return (
    <div className="div">
      <div className="header">
        {data &&
          data.map((items) => (
            <div className="eader">
              <p className="button">
                <h2>{items.name}</h2>
                <h5 className="visi">{items.visibility}</h5>
              </p>
              <br />
              <p className="para">{items.description}</p>
              <br />
              <p>
                {items.topics.map((topic) => (
                  <p className="topics">{topic}</p>
                ))}
              </p>
            </div>
          ))}
      </div>
      <button className="button move" onClick={() => setPage(page + 1)}>
        <h2>{loading ? "...載入中" : "More"}</h2>
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("here"));
