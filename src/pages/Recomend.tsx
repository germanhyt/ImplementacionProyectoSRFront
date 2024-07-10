import MoviesRecomendGrid from "@/components/Movies/MoviesRecomendGrid";
import { MoviesRecomendProvider } from "@/core/hooks/MoviesRecomendContext";

const Recomend = () => {
  return (
    <div className="min-h-[100vh] ">
      <section className="">
        <div className="flex justify-center mt-10 text-2xl ">Recomendaciones</div>
        <MoviesRecomendProvider>
          <MoviesRecomendGrid page="recomendacion" />
        </MoviesRecomendProvider>
      </section>
    </div>
  );
};

export default Recomend;
