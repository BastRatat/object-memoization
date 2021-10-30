import { useState, useRef } from "react";
import Child from "./Child";
import { InitialState } from "./types";
import { userOne, userTwo } from "./users";
import "./App.css";

const App = () => {
  const [user, setToggleUser] = useState<InitialState>({
    id: null,
    firstName: "",
    lastName: "",
  });
  const [areButtonsColored, setAreButtonsColored] = useState<boolean>(false);
  const parentCounter = useRef(0);

  const handleToggleUser = (user: any): void => {
    if (user === "Bastien") {
      setToggleUser(userOne);
    }
    if (user === "Antoine") {
      setToggleUser(userTwo);
    }
  };

  const resetUser = (): void => {
    setToggleUser({
      id: null,
      firstName: "",
      lastName: "",
    });
  };

  const handleColoringButton = (): void => {
    setAreButtonsColored(!areButtonsColored);
  };

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h3>PARENT</h3>
          <p>Parent render(s): {(parentCounter.current += 1)}</p>
          <button
            onClick={() => handleToggleUser("Bastien")}
            className={areButtonsColored ? "colored" : ""}
          >
            Toggle Bastien
          </button>
          <button
            onClick={() => handleToggleUser("Antoine")}
            className={areButtonsColored ? "colored" : ""}
          >
            Toggle Antoine
          </button>
          <button
            onClick={handleColoringButton}
            className={areButtonsColored ? "colored" : ""}
          >
            Color buttons
          </button>
          <button
            onClick={resetUser}
            className={areButtonsColored ? "colored" : ""}
          >
            Reset user
          </button>
        </section>
        <Child {...{ user }} />
      </header>
    </div>
  );
};

export default App;
