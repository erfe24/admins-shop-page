import React, { useState } from "react";

export default function ItemForm(props) {
    return <form onSubmit={props.onSubmit}>
    <div>
      <input
        id="name"
        type="text"
        placeholder="Название товара"
        className="ui-textfield"
        value={props.name}
        onChange={(e) => props.onNameChange(e.target.value)}
      />
    </div>
    <div>
      <input
        id="desc"
        type="text"
        placeholder="Описание товара"
        className="ui-textfield"
        value={props.desc}
        onChange={(e) => props.onDescChange(e.target.value)}
      />
    </div>
    <div className="form-footer">
      <div className="validation"></div>
      <input type="submit" className="ui-button" value="Добавить" />
    </div>
  </form>
}