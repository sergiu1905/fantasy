import { Link } from 'react-router-dom';
import SectionModel from '../SectionModel';
import { LIVING_ROOM } from '../../data';
import DescriptionFantasy from '../DescriptionFantasy/DescriptionFantasy';
export default function LivingRoom() {
  return (
    <>
      <div>
        <Link to={'/'}>Pagina Principala</Link>
        <Link to={'/exterior'}>Exterior</Link>
        <Link to={'/CameraDubla'}>Camera Dubla</Link>
        <Link to={'/apartament'}>Apartament</Link>
      </div>
      <iframe
        class="map"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?q=Constanta%2C%20Bd.%20Mamaia%20281C&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
        title="Constanta, Bd. Mamaia 281C"
        aria-label="Constanta, Bd. Mamaia 281C"
      ></iframe>
      <div className="description">
        <SectionModel id="description-fantasy">
          <h2>Esti la un pas de vacanta ta 0722822166</h2>
          <ul>
            {LIVING_ROOM.map((itemDescription) => (
              <DescriptionFantasy
                key={itemDescription.num}
                {...itemDescription}
              />
            ))}
          </ul>
        </SectionModel>
      </div>
    </>
  );
}
