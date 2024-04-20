import { Link } from 'react-router-dom';
// import DetailsFantasy from '../DetailsFantasy/DetailsFantasy';
import SectionModel from '../SectionModel';
import DescriptionFantasy from '../DescriptionFantasy/DescriptionFantasy';
import { EXTERIOR } from '../../data';

export default function Exterior() {
  return (
    <div>
      <Link to={'/'}>Pagina Principala</Link>
      <Link to={'/livingRoom'}>Living Room</Link>
      <Link to={'/CameraDubla'}>Camera Dubla</Link>
      <Link to={'/apartament'}>Apartament</Link>
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
