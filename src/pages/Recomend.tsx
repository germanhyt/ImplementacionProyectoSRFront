import MoviesRecomendGrid from "@/components/Movies/MoviesRecomendGrid";
import { MoviesRecomendProvider } from "@/core/hooks/MoviesRecomendContext";

const Recomend = () => {
  return (
    <div className="min-h-[100vh] ">
      <section>
        <MoviesRecomendProvider>
          <MoviesRecomendGrid page="recomendacion" />
        </MoviesRecomendProvider>
      </section>
    </div>
  );
};

export default Recomend;
