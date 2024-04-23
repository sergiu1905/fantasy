import piatra_mare from '../../assets/piatra_mare.jpg';
import piatra_mare1 from '../../assets/piatra_mare3.jpg';

import './Header.css';

const fantasyDescription = [
  'Suntem cea mai buna optiune pentru vacanta ta...',
  'De aici poate incepe viitoarea ta vacanta...',
  'Relaxare...suntem aici ptr tine...',
];
export function genRandomInt() {
  return Math.floor(Math.random() * fantasyDescription.length);
}

export default function Header() {
  const description = fantasyDescription[genRandomInt()];
  return (
    <header>
      <div className="header-title">
        <img id="img1" src={piatra_mare} alt="muntele piatra mare" />
        <h1>FANTASY</h1>
        <img id="img2" src={piatra_mare1} alt="muntele piatra mare" />
      </div>

      <p>{description}</p>
    </header>
  );
}
export { fantasyDescription };
