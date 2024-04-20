import { DESCRIPTION_FANTASY } from '../../data';
import DescriptionFantasy from '../DescriptionFantasy/DescriptionFantasy';
import SectionModel from '../SectionModel';
import './DetailsFantasy.css';
export default function DetailsFantasy() {
  return (
    <div className="description">
      <SectionModel id="description-fantasy">
        <h2>Esti la un pas de vacanta ta 0722822166</h2>
        <ul>
          {DESCRIPTION_FANTASY.map((itemDescription) => (
            <DescriptionFantasy
              key={itemDescription.num}
              {...itemDescription}
            />
          ))}
        </ul>
      </SectionModel>
    </div>
  );
}
