import React, { useState } from "react";
import List from "../List";
import Alert from "../Alert";

function Todos() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert(true, "danger", "Please Enter Value");
    } else if (item && isEdit) {
      setList(
        list.map((todo) => {
          if (todo.id === editId) {
            return { ...todo, title: item };
          }
          return item;
        })
      );
      setItem("");
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "success", "value Change");
    } else {
      showAlert(true, "success", "Item Added");
      const newItem = { id: new Date().getTime().toString(), title: item };
      setList([...list, newItem]);
      setItem("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const updatedItem = list.find((item) => item.id === id);
    console.log(updatedItem, "item");
    setIsEdit(true);
    setEditId(id);
    setItem(updatedItem.title);
  };

  const clearItems = () => {
    showAlert(true, "danger", "List is Empty");
    setList([]);
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          Todo App
        </h3>
        <div className="mb-3 form">
          <input
            type="text"
            value={item}
            className="form-control"
            placeholder="add todo"
            onChange={handleChange}
          />
          <button
            style={{ marginLeft: "12px" }}
            type="submit"
            className="btn btn-success"
          >
            {isEdit ? "EditItem" : "AddItem"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="text-center">
            <button className="btn btn-warning" onClick={clearItems}>
              Clear All
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Todos;
