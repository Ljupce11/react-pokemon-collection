import { useEffect, useState } from "react";
import { Link } from "react-router";

import { SearchForm } from "./components/common/search-form";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { Skeleton } from "./components/ui/skeleton";

const ITEMS_PER_PAGE = 20;

function App() {
  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`,
        );
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <main className="bg-white border-gray-200 dark:bg-gray-900 min-h-screen">
      <div className="max-w-screen-xl flex flex-col mx-auto gap-8 p-4">
        <h1 className="text-2xl font-semibold text-center">Browse pokemon</h1>
        <SearchForm />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <>
              {Array.from({ length: 20 }).map((_, index) => {
                const key = `skeleton-${index + 1}`;
                return (
                  <Card key={key}>
                    <CardHeader>
                      <Skeleton className="h-24 w-full rounded-md" />
                    </CardHeader>
                    <Separator />
                    <CardContent>
                      <Skeleton className="h-6 w-24 rounded-md" />
                    </CardContent>
                  </Card>
                );
              })}
            </>
          ) : (
            <>
              {pokemon.map((pokemon, index) => (
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  key={pokemon.name}
                  className="transition-transform hover:scale-105"
                >
                  <Card>
                    <CardHeader>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                        alt={pokemon.name}
                        className="w-24 h-24 mx-auto"
                      />
                    </CardHeader>
                    <Separator />
                    <CardContent>
                      <p className="capitalize font-semibold">{pokemon.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </>
          )}
        </div>
        <div className="mx-auto flex items-center justify-center gap-4">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            Previous
          </Button>

          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
