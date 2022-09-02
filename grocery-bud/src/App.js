import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import { useEffect, useState } from "react";
import Alert from "./Alert";

const getLocalStorage = () => {
  const localList = localStorage.getItem("arr");
  console.log(localList);
  if (localList) {
    return JSON.parse(localList);
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({
      show: show,
      type: type,
      msg: msg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // show alert that list is empty
      showAlert(true, "Please enter value", "danger");
    } else if (name && isEditing) {
      // go to edit

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([newItem, ...list]);
      setName("");
      setIsEditing(false);
      setEditId(null);

      showAlert(true, "Item Edited in cart", "success");
    } else {
      //add value to name list
      showAlert(true, "Item added in cart", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([newItem, ...list]);
      //setList(list.reverse());
      setName("");
    }
  };

  const emptyList = () => {
    showAlert(true, "List cleared", "success");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(alert, "item deleted", "danger");
    setList(list.filter((x) => x.id !== id));
  };

  const editItem = (id) => {
    const specItem = list.find((x) => x.id === id);
    setIsEditing(true);
    setName(specItem.title);
    setList(list.filter((x) => x.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="list your groceries"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} delteItem={removeItem} renameItem={editItem} />
          <button className="clear-btn" onClick={emptyList}>
            Clear Button
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
