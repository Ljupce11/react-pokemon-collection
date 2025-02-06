import { Skeleton } from "../ui/skeleton";

type PokemonSpriteProps = {
  src: string;
  alt: string;
  className?: string;
};

export const PokemonSprite = ({
  src,
  alt,
  className = "w-24 h-24",
}: PokemonSpriteProps) => {
  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    target.classList.remove("invisible");
    const placeholder = target.previousElementSibling;
    if (placeholder) {
      placeholder.classList.add("hidden");
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Skeleton className={className} />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`invisible ${className}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
