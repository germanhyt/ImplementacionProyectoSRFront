import MoviesRecomendGrid from "@/components/Movies/MoviesRecomendGrid";
import { MoviesRecomendProvider } from "@/core/hooks/MoviesRecomendContext";

const Peliculas = () => {
  // recuperar los queryparams

  return (
    <div className="min-h-[100vh] ">
      <section className="mt-20">
        <MoviesRecomendProvider>
          <MoviesRecomendGrid page="peliculas" />
        </MoviesRecomendProvider>
      </section>
    </div>
  );
};

export default Peliculas;
