import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import ItemForm from "./ItemForm.js";

export default function Shop() {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("items")) || [])
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function NoItems() {
    if (!items.length) {
      return (
        <div>
          <p className="ui-title">Добавьте первый товар</p>
        </div>
      );
    }

    return null;
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    document.title = items.length > 0 ? `${items.length} товар(а/ов)` : "Товары отсутствуют";
  })

  function handleDeleteClick(item) {
    setItems((prevItems) => prevItems.filter((it) => it.id !== item.id));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() !== "" && desc.trim() !== "") {
      const id = crypto.randomUUID();
      setItems((prevItems) => [...prevItems, { id, name, desc }]);
      setName("");
      setDesc("");
    } else {
      alert("Заполните все поля!");
    }
  }

  return (
    <>
      <ItemForm name={name} onNameChange={setName} desc={desc} onDescChange={setDesc} onSubmit={handleSubmit} />

      <NoItems />
      
      <ItemList items={items} onDeleteClick={handleDeleteClick}/>
    </>
  );
}
