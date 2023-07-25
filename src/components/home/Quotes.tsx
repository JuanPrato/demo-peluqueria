import Glider from 'react-glider';
import 'glider-js/glider.min.css';

const QUOTES: { name: string, review: string }[] = [
  {
    name: "John Doe",
    review: "Amazing experience! Loved the haircut and the friendly staff. Will definitely come back for more top-notch services.",
  },
  {
    name: "Jane Smith",
    review: "Exceptional coloring services! They achieved exactly the shade I wanted, and the result was truly spectacular. Highly recommended salon!",
  },
  {
    name: "John Doe",
    review: "Amazing experience! Loved the haircut and the friendly staff. Will definitely come back for more top-notch services.",
  },
  {
    name: "Jane Smith",
    review: "Exceptional coloring services! They achieved exactly the shade I wanted, and the result was truly spectacular. Highly recommended salon!",
  },
]

export function Quotes() {
  return (
    <section id="quotes">
      <h2 className="mb-5 text-3xl font-semibold">OPINIONES DE NUESTROS CLIENTES</h2>
      <div className="px-10">
        <Glider
          slidesToShow={2}
          slidesToScroll={2}
          scrollLock
          hasDots
          hasArrows
        >
          {
            QUOTES.map(({ name, review }, i) => (
              <div key={i} className='card p-4 bg-base-300 text-base-content mx-2 mb-5'>
                <p className="grow font-semibold">{review}</p>
                <header className="font-bold text-lg text-end">{name}</header>
              </div>
            ))
          }
        </Glider>
      </div>
      <div className="divider" />
    </section>
  );
} 