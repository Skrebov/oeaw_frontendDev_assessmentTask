import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { SearchForm } from "./components/SearchForm";
import { ResultTable } from "./components/ResultTable";
import { StellenResult, Stelle } from "./Interface/StelleTypes";

function App() {
  const [response, setResponse] = useState<StellenResult>();
   
  return (
    <div className="flex flex-col justify-center mt-6 items-center">
      <h1 className="text-3xl text-center">Search Stelle</h1>
      <div className="flex flex-col w-[60%] justify-center ">
       <SearchForm onFetch={setResponse}></SearchForm>
       {response && <ResultTable input={response}></ResultTable>}
      </div>
    </div>
  );
}

export default App;
