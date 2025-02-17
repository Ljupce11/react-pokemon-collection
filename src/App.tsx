import { ClipboardList } from "lucide-react";

import { BrowsePokemonContent } from "./components/common/browse-pokemon-content";
import { Pagination } from "./components/common/pagination";
import { SearchForm } from "./components/common/search-form";
import { usePokemonData } from "./hooks/use-pokemon-data";

function App() {
  const {
    pokemon,
    currentPage,
    totalPages,
    isLoading,
    handlePageChange,
    handleSearch,
  } = usePokemonData();

  return (
    <div className="max-w-screen-xl flex flex-col mx-auto gap-8 p-4">
      <div className="flex justify-center items-center gap-3">
        <ClipboardList size={24} />
        <h1 className="text-2xl font-semibold">Browse pokemon</h1>
      </div>
      <SearchForm handleSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <BrowsePokemonContent isLoading={isLoading} pokemon={pokemon} />
      </div>
      {pokemon.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;
