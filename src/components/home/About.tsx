export function About() {
  return (
    <>
      <section className="pb-4 pt-12" id="about">
        <div className="grid grid-cols-3">
          <div className="pr-4">
            <h1 className="text-3xl font-semibold mb-5">NUESTRO SALON</h1>
            <p className="mb-4 text-xl leading-9">Bienvenidos a Belleza Express, tu destino de belleza y bienestar en el corazón de la ciudad.<br /> En nuestra peluquería y centro de estética, nos apasiona realzar la belleza natural de nuestros clientes y brindarles una experiencia única y satisfactoria.</p>
            <button className="btn btn-outline">LEER MÁS</button>
          </div>
          <img
            className="col-span-2 shadow-lg rounded transition-transform hover:scale-105"
            src="/salon.png"
            alt="salon image"
            width={1500}
            height={1500}
          />
        </div>
      </section>
      <div className="divider" />
    </>
  );
}