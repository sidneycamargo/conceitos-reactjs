import React, {useState} from "react";

import "./styles.css";
import api from "./services/api";
import { useEffect } from "react";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then( response => {
      setRepositories(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title : `Novo projeto ${Date.now()}`
    }); 

    const repository = response.data;

    setRepositories( [ ... repositories, repository ] )
  }

  async function handleRemoveRepository(id) {
  
    const repositoryIndex = repositories.findIndex(repository => repository.id === id);

    const repositoriesTmp = repositories;

    repositoriesTmp.splice(repositoryIndex, 1);

    if (repositoriesTmp.length === 0) {
      setRepositories( [] );
    } else {
      setRepositories( repositoriesTmp );
    }

  }
  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository =>
            <li key={repository}>{repository.title}</li>
        )}
      </ul>
      <button onClick = {() => handleRemoveRepository(1)}>
                Remover
      </button> 
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  )
}

export default App;
