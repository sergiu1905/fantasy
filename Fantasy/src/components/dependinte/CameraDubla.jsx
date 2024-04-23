import { Link } from 'react-router-dom';
import './Dependinte.css';
import SectionModel from '../SectionModel';
import DescriptionFantasy from '../DescriptionFantasy/DescriptionFantasy';
import { EXTERIOR } from '../../data';
import Weather from '../Weather/Weather';
import { fantasyDescription } from '../Header/Header';
import { genRandomInt } from '../Header/Header';
import { useState } from 'react';
export default function LivingRoom() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const description = fantasyDescription[genRandomInt()];
  return (
    <div className="exterior">
      <h1>CAMERA DUBLA</h1>
      <div className="buttons-navigation">
        <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
          <button className="burger-icon" onClick={handleToggleMenu}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </button>
          {isOpen && (
            <div className="menu">
              <Link className="link-btn" to={'/'}>
                Pagina Principala
              </Link>
              <Link className="link-btn" to={'/exterior'}>
                Exterior
              </Link>
              <Link className="link-btn" to={'/LivingRoom'}>
                Living Room
              </Link>
              <Link className="link-btn" to={'/apartament'}>
                Apartament
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="map-weather">
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
