const SERVICES = [
  "Corte y estilo",
  "Estética facial",
  "Manicura y pedicura",
  "Reparación capilar"
]

export function Services() {
  return (
    <section id="services">
      <h2 className="mb-5 text-3xl font-semibold">SERVICIOS</h2>
      <div className="flex gap-3">
        {
          SERVICES.map((s, i) => (
            <div
              className="aspect-[9/12] p-2 w-1/4 shadow-lg bg-no-repeat bg-cover flex flex-col justify-between items-start transition-transform hover:scale-105"
              style={{ backgroundImage: 'url(/service.png)' }} key={i}>
              <h3 className="text-white text-xl font-semibold drop-shadow shadow-white">{s}</h3>
              <button className="btn">Leer más</button>
            </div>
          ))
        }
      </div>
      <div className="divider" />
    </section>
  );
}