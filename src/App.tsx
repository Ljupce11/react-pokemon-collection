import { useEffect } from "react";
import { Button } from "./components/ui/button";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Vite + React</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
