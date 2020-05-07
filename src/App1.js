import React, {useState} from "react";

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
// TODO

  }

  async function handleRemoveRepository(id) {
    // TODO
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
