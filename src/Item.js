import React, { useEffect, useState } from "react";

export default function Item(props) {
  const { info } = props;

  const [total, setTotal] = useState(() => Number.parseInt(localStorage.getItem(info.id), 10) || 1);

  useEffect(() => {
    localStorage.setItem(info.id, total);
  })

  if (!info) {
    return null;
  }

  

  function handleIncreaseClick() {
    setTotal((prevTotal) => prevTotal + 1);
  }

  function handleDescreaseClick() {
    setTotal((prevTotal) => (prevTotal > 0 ? prevTotal - 1 : prevTotal));
  }

  return (
    <div className="item">
      <div className="item-info">
        <h2 className="item-title">{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className="item-quantity">
        <button
          className="item-button"
          disabled={total <= 1}
          onClick={handleDescreaseClick}
        >
          -
        </button>
        <h3 className="item-total">{total}</h3>
        <button className="item-button" onClick={handleIncreaseClick}>
          +
        </button>
      </div>
    </div>
  );
}
