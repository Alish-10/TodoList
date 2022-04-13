import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems]= useState([]);

    const itemEvent = (event) => {
    setInputList(event.target.value);
    };

    const listOfItems = () => { 
        setItems((oldItems) =>{
            return[...oldItems, inputList];
        });
        setInputList('');
    };

    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems) => {
        return oldItems.filter((arrElem,index) => {
            return index !== id;
        });   
        });
    };

    return (
        <>
            <div className="main-div">
                <div className="centre-div">
                    <br/>
                    <h1> ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add a items" value={inputList} 
                    onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                            {Items.map((itemval, index) => {
                              return ( <ToDoLists 
                              key ={index} 
                              id = {index} 
                              onSelect = {deleteItems}
                              text = {itemval} 
                              />
                              );
                            })} 
                    </ol>
                </div>
            </div>
        </>
    );

};

export default App;