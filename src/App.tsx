import { useEffect } from "react";

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
    <main className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-500 text-center">
          Vite + React
        </h1>
      </div>
    </main>
  );
}

export default App;
