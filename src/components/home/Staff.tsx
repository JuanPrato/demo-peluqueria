export type Employee = {
  name: string;
  specialty: string;
}

const STAFF: Employee[] = [
  {
    name: "Vivi",
    specialty: "Estilista profesional",
  },
  {
    name: "Julio",
    specialty: "Estilista profesional",
  }
];

export default function Staff() {

  return (
    <>
      <section className="" id="staff">
        <h2 className="mb-5 text-3xl font-semibold">NUESTRO EQUIPO</h2>
        <div className="flex justify-center gap-11">
          {
            STAFF.map((e, i) => (
              <div
                className="card relative max-w-[350px] overflow-hidden group transition-all hover:scale-105"
                key={i}
              >
                <figure><img src="./staff.png" alt="staff img" className="aspect-[9/12] object-cover" /></figure>
                <div className="opacity-0 hover:opacity-100 absolute bg-neutral bg-opacity-70 text-neutral-content w-full h-full flex flex-col justify-center items-center transition-opacity">
                  <h2 className="card-title font-semibold text-2xl">{e.name}</h2>
                  <p className="grow-0 font-light text-sm">{e.specialty}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <div className="divider" />
    </>
  )
}

/*

*/