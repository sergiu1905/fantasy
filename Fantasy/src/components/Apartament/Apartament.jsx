import { Link } from 'react-router-dom';

export default function Apartament() {
  return (
    <>
      <div>
        <Link to={'/'}>Pagina Principala</Link>
        <Link to={'/exterior'}>Exterior</Link>
        <Link to={'/livingRoom'}>Living Room</Link>
        <Link to={'/CameraDubla'}>Camera Dubla</Link>
      </div>
    </>
  );
}
