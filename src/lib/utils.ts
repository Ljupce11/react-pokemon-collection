import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPokemonImageUrl(id: number, variant?: "back") {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${variant ? "back/" : ""}${id}.png`;
}
