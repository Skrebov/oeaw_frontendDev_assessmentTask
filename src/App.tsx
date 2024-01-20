import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState();

  return (
    <div className="flex flex-col justify-center mt-6 items-center">
      <h1 className="text-3xl text-center">Search Stelle</h1>
      <div className="flex w-[60%] items-end">
       <SearchForm onFetch={setResponse}></SearchForm>
      </div>
    </div>
  );
}

export default App;
