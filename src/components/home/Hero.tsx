export function Hero() {
  return (
    <section className="hero min-h-screen justify-items-start max-w-[1920px] mx-auto" style={{ backgroundImage: 'url(./hero.png)' }}>
      <div className="hero-overlay bg-gradient-to-r from-black via-transparent to-black via-95%"></div>
      {/* <img src="./hero.png" alt="hero" /> */}
      <div className="hero-content max-w-xl flex-col items-start">
        <h2 className="text-7xl font-semibold drop-shadow-lg  leading-[90px]">LA BELLEZA<br /><span className="font-bold italic whitespace-nowrap">A TU ALCANCE</span></h2>
        <p className="text-lg italic">Descubre tu belleza interior y déjala brillar en nuestras manos expertas.</p>
        <button className="btn btn-outline btn-lg">RESERVA TU TURNO</button>
      </div>
    </section>
  );
}