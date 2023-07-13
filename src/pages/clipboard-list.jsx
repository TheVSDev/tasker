// Imports
import { useState } from "react";

import styles from "@/web/styles/List.module.css";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import HeadPage from "@/web/components/HeadPage";
import Container from "@/web/components/Container";
import Sidebar from "@/web/components/Sidebar";
import Button from "@/web/components/Button";
import DeleteButton from "@/web/components/DeleteButton";
import Input from "@/web/components/Input";

// ClipboardList function
export default function ClipboardList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <Container>
          <Input
            type="text"
            value={task}
            onChange={handleTaskChange}
            placeholder="Enter an item"
          />
          <Button btnLabel="Add" onClick={handleAddTodo} />
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={styles.listItem}>
                <span>{todo}</span>
                <DeleteButton
                  btnLabel="Delete"
                  onClick={() => handleDeleteTodo(index)}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
