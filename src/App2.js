import React, {useState, useEffect} from "react";

import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  });

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Novo repositório ${Date.now()}`
    });  

    const repository = response.data

    setRepositories( [ ... repositories, repository ]);

    console.log(repositories);
  }

  async function handleRemoveRepository(id) {
    // TODO
  /**
    const response = await api.delete('repositories', id);

    setRepositories([ response ]);
   
   */
  console.log('remover' + id);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository =>
          <>  
            <li key={repository.id}>{repository.title}</li>
            <button key={"btn_" + repository.id} onClick = {() => handleRemoveRepository(repository.id)}>
                Remover
              </button> 
          </>
        )}

      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
