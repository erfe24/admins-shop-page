import React from "react";
import Item from "./Item.js";

export default function ItemList(props) {
    return <ul className="ui-list">
        {props.items.map((item) => {
          return (
            <li className="ui-item-list" key={item.id}>
              <Item info={item} />
              <button
                onClick={() => props.onDeleteClick(item)}
                type="button"
                className="item-button"
                key={item.id}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
}