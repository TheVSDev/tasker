// Imports
import { useState } from "react";

import styles from "@/web/styles/TaskManager.module.css";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Title from "@/web/components/Title";
import HeadPage from "@/web/components/HeadPage";
import Container from "@/web/components/Container";
import Sidebar from "@/web/components/Sidebar";
import Button from "@/web/components/Button";
import Input from "@/web/components/Input";
import DeleteButton from "@/web/components/DeleteButton"


// TaskManager function
export default function TaskManager() {
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState("");
  const [task, setTask] = useState("");

  const handleListChange = (event) => {
    setCurrentList(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleListSubmit = (event) => {
    event.preventDefault();
    if (currentList.trim() !== "") {
      setLists([...lists, { listName: currentList, tasks: [] }]);
      setCurrentList("");
    }
  };

  const handleTaskSubmit = (event, listIndex) => {
    event.preventDefault();
    if (task.trim() !== "") {
      const updatedLists = [...lists];
      updatedLists[listIndex].tasks.push(task);
      setLists(updatedLists);
      setTask("");
    }
  };

  const handleListClick = (listIndex) => {
    setCurrentList(lists[listIndex].listName);
  };

  const handleDeleteList = (listIndex) => {
    const updatedLists = [...lists];
    updatedLists.splice(listIndex, 1);
    setLists(updatedLists);
  };

  // const handleDeleteTask = (listIndex, taskIndex) => {
  //   const updatedLists = [...lists];
  //   updatedLists[listIndex].tasks.splice(taskIndex, 1);
  //   setLists(updatedLists);
  // };

  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <Container>
          <div className={styles.container}>
            <div className={styles.lists}>
              <Title titleLabel="LISTS" />
              <form onSubmit={handleListSubmit}>
                <Input
                  type="text"
                  value={currentList}
                  onChange={handleListChange}
                  placeholder="Enter list name"
                />
                <Button btnLabel="Create List" type="submit" />
              </form>
              <ul>
                {lists.map((list, index) => (
                  <li
                    key={index}
                    className={styles.listItem}
                    onClick={() => handleListClick(index)}
                  >
                    {list.listName}
                    <DeleteButton onClick={handleDeleteList} btnLabel="X" />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.tasks}>
              {lists.map((list, index) => (
                <div
                key={index}
                className={currentList === list.listName ? "" : styles.hidden}
                >
                  <Title titleLabel={list.listName} />
                  <form onSubmit={(event) => handleTaskSubmit(event, index)}>
                    <Input
                      type="text"
                      value={task}
                      onChange={handleTaskChange}
                      placeholder="Enter task"
                    />
                    <Button btnLabel="Add task" type="submit" />
                  </form>
                  <ul>
                    {list.tasks.map((task, taskIndex) => (
                      <li key={taskIndex}>{task}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
