import { Link } from 'react-router-dom';
import './Dependinte.css';
import SectionModel from '../SectionModel';
import DescriptionFantasy from '../DescriptionFantasy/DescriptionFantasy';
import { EXTERIOR } from '../../data';
import Weather from '../Weather/Weather';
import { fantasyDescription } from '../Header/Header';
import { genRandomInt } from '../Header/Header';
export default function LivingRoom() {
  const description = fantasyDescription[genRandomInt()];
  return (
    <div className="exterior">
      <h1>LIVING ROOM</h1>
      <div className="map-weather">
        <div className="buttons-navigation">
          <Link className="link-btn" to={'/'}>
            Pagina Principala
          </Link>
          <Link className="link-btn" to={'/exterior'}>
            Exterior
          </Link>
          <Link className="link-btn" to={'/CameraDubla'}>
            Camera Dubla
          </Link>
          <Link className="link-btn" to={'/apartament'}>
            Apartament
          </Link>
        </div>

        <Weather />
      </div>
      <div className="description">
        <SectionModel id="description-fantasy">
          <h2>{description} 0722822166</h2>
          <ul>
            {EXTERIOR.map((itemDescription) => (
              <DescriptionFantasy
                key={itemDescription.num}
                {...itemDescription}
              />
            ))}
          </ul>
        </SectionModel>
      </div>
    </div>
  );
}
