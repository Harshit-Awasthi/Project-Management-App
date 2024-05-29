import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {

  const [projectsState,setProjectsState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });

  function handleStartAddProject()
  {
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  let content;

  if(projectsState.selectedProjectId === null)
    {
        content= <NewProject />
    }
    else if(projectsState.selectedProjectId === undefined)
      {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
      }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
