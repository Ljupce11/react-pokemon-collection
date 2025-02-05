import { Pagination } from "./components/common/pagination";
import { PokemonCard } from "./components/common/pokemon-card";
import { SearchForm } from "./components/common/search-form";
import { BrowsePokemonSkeleton } from "./components/skeletons/browse-pokemon-skeleton";
import { usePokemonData } from "./hooks/usePokemonData";

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
    <main className="bg-white border-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="max-w-screen-xl flex flex-col mx-auto gap-8 p-4">
        <h1 className="text-2xl font-semibold text-center">Browse pokemon</h1>
        <SearchForm handleSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <BrowsePokemonSkeleton />
          ) : pokemon.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No pokemon found
            </div>
          ) : (
            pokemon.map((pokemon, index) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
            ))
          )}
        </div>
        {pokemon.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
}

export default App;
