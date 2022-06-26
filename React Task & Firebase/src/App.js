import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http'
import styled from 'styled-components'

const AppDiv = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`;

const App = () => {
  const [tasks, setTasks] = useState([])

  const transformTasks = tasksObject => {
    const loadedTasks = []
    for (const key in tasksObject) {
      loadedTasks.push({ id: key, text: tasksObject[key].text})
    }
    setTasks(loadedTasks)
  }

  const {isLoading, error, sendRequest: fetchTasks} = useHttp(
    {
      url: "https://react-tasks-75894-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      method: 'GET'
    }, 
    transformTasks
  )

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const deleteTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.pop(task) 
    })
  }

  return (
    <AppDiv>
      <section>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
        />
      </section>
      <SideBar items={tasks} onDelete={deleteTaskHandler}/>
    </AppDiv>
  );
}

export default App;
