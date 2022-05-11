import React from "react";
import TodoItem from "./To-do-item"
import InputArea from "./InputArea";

function App() {


  const [items, setItems] = React.useState([])



  function addItem(item){
    setItems( (previousItems) => {
      return [...previousItems, item]
    });
  }

  function deleteItem(id){
    setItems(previousItems => {
      return previousItems.filter( (item, index) => {
          return index !== id
        }
      )
    })
  }

  return (

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
      onAddItem={addItem}
      />
      <div>
          {items.map( (eachItem, index) => (
            <TodoItem
            key={index}
            id={index}
            text={eachItem}
            onChecked={deleteItem}
            />
            ))}
      </div>
    </div>
  );
}

export default App;
