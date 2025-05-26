import React from "react";
import Counter from "./components/Counter.jsx";
import FilterList from "./components/FilterList.jsx";
import RegistrationForm from "./RegistrationForm.jsx";

function App() {

  return (
    <>
      <div>
        <h2>Задание 1: useCallback + React.memo</h2>
          <Counter/>
          <hr/>
          <h2>Задание 2: useMemo + useCallback</h2>
          <FilterList/>
        <div>
            <h1>Регистрация</h1>
            <RegistrationForm/>
        </div>
      </div>
    </>
  );
}

export default App
