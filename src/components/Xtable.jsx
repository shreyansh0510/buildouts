import React, { useState } from "react";

const itemsData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function Xtable() {
  const [items, setItems] = useState(itemsData);

  const handleSortViews = () => {
    console.log("handleSortViews");
    let results = items.sort((a, b) => {
      return a.views - b.views;
    });
    console.log("results", results);
    setItems([...results]);
  };

  const handleSortDate = () => {
    console.log("handleSortDate");

    let results = items.sort((a, b) => {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      return dateA - dateB;
    });

    setItems([...results]);
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortDate}>Sort by Date</button>
      &nbsp;
      <button onClick={handleSortViews}>Sort by Views</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {items.map((item) => {
          return (
            <>
              <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}
