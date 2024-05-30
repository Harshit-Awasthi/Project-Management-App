import { useState } from "react";

import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState,setProjectsState] = useState({
    selectedProjectId: undefined,
    projects:[]
  });

  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject()
  {
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject(){

    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });

  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      
      const projectID=Math.random();
      const newProject={
        ...projectData,
        id: projectID,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects,newProject],
      };

    });
    
  }

  const selectedProject=projectsState.projects.find(project=>project.id === projectsState.selectedProjectId)

  let content = <SelectedProject project={selectedProject}/>;

  if(projectsState.selectedProjectId === null)
    {
        content= <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    }
    else if(projectsState.selectedProjectId === undefined)
      {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
      }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
