// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import TaskDetail from './components/task-detail/task-detail';
import TaskView from './components/task-view/task-view';
import styled from "@emotion/styled";
import Checkbox from './components/app-checkbox';

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

const SidebarWrapper = styled.div`
  flex-basis: 200px;
`

const TaskViewWrapper = styled.div`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc; 
  flex: 1 1 0%;
`

const TaskDetailWrapper = styled.div`
  flex-basis: 35%;
`




function App() {

  return (
    <AppWrapper>
      <SidebarWrapper>
        <Sidebar></Sidebar>
      </SidebarWrapper>
      <TaskViewWrapper>
        <TaskView></TaskView>
      </TaskViewWrapper>
      <TaskDetailWrapper>
        <TaskDetail></TaskDetail>
      </TaskDetailWrapper>
    </AppWrapper>
  );
}

export default App;
