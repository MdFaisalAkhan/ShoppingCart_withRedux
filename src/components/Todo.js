import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/index";
import "./Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your List Here</figcaption>
          </figure>
          <div className="addItem">
            <input
              type="text"
              placeholder="Add Item.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
            </i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
                return(
              <div className="eachitem" key={elem.id}>
                <h3>{elem.data}</h3>
                <div className="todo-btn">
                <i className="far fa-trash-alt add-btn"
                   title="Delete item"
                   onClick={() =>
                   dispatch(deleteTodo(elem.id), setInputData(""))}
                >
                </i>
                </div>
              </div>
                )
            })}
          </div>
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="remove All"
                onClick={()=>dispatch(removeTodo())}>
                    <span>Check List</span>
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Todo;
