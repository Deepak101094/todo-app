import React from "react";
import { PropTypes } from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="container">
      {items.map(({ title, id }) => {
        //  const { id, title } = item;
        return (
          <ul className="list-group list-group-flush" key={id}>
            <li className="list-group-item d-flex justify-content-between align-item-center">
              {title}
              <div
                style={{
                  float: "right",
                }}
              >
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array,
  removeItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default List;
