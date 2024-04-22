import apartament from './assets/canapea_apartament.jpg';
import camera2 from './assets/camera2.jpg';
import exterior from './assets/fantasy_exterior1.jpg';
import living from './assets/living_verde.jpg';
import clabucet from './assets/partie.webp';
import peles from './assets/peles.jpg';
import bran from './assets/bran.jpg';
import brasov from './assets/brasov.jpg';
import canionul_7_scari from './assets/canion_7_scari.jpg';
import exterior1 from './assets/fantasy_exterior2.jpg';
import foisor from './assets/foisor.jpg';
import gratar from './assets/gratar.jpg';
import { Link } from 'react-router-dom';
export const DESCRIPTION_FANTASY = [
  {
    image: exterior,
    title: <Link to={'/exterior'}>Exterior</Link>,
    description:
      "Suntem in natura unde doar cantecul pasarelelor va poate 'deranja'",
    num: 1,
  },
  {
    image: living,
    title: <Link to={'/livingRoom'}>Living Room</Link>,
    description:
      'Petrecerea timpului intr-un ambient placut este oferita de living-ul spatios',
    num: 2,
  },
  {
    image: camera2,
    title: <Link to={'/CameraDubla'}>Camera Dubla</Link>,
    description:
      'Majoritatea camerelor au balcon si ofera o priveliste minunata spre oras sau padure',
    num: 3,
  },
  {
    image: apartament,
    title: <Link to={'/apartament'}>Apartament</Link>,
    description: 'Pentru familii cu copii oferim apartamente de 2 camere ',
    num: 4,
  },
];

export const ATRACTII = {
  partia_clabucet: {
    title: (
      <a href="https://www.infoalpin.ro/live/predeal-clabucet-sosire/">
        Partia Clabucet
      </a>
    ),
    image: clabucet,
    description:
      'Predeal este renumit pentru partiile sale de schi, care ofera turistilor oportunitati unice de a se bucura de sporturile de iarna. Partiile din Predeal sunt cunoscute pentru inclinatiile lor variate, care sunt potrivite pentru schiori si snowboarderi de toate nivelurile de abilitate. De la partii pentru incepatori la partii pentru experti, Predeal ofera o experienta de neuitat pentru toti iubitorii de sporturi de iarna.',
  },
  castelul_peles: {
    title: <a href="https://peles.ro/">Castelul Peles</a>,
    image: peles,
    description:
      'Castelul Peleș este un palat din Sinaia, construit între anii 1873 și 1914. Construită ca reședință de vară a regilor României, clădirea se află, în prezent, în proprietatea Familiei Regale a României și adăpostește Muzeul Național Peleș. Castelul Peleș este unul dintre cele mai importante edificii de tip istoric din România, având caracter de unicat și este, prin valoarea sa istorică și artistică, unul din cele mai importante monumente de acest fel din Europa celei de-a doua jumătăți a secolului al XIX-lea.',
  },
  castelul_bran: {
    title: <a href="https://castelulbran.ro/">Castelul Bran</a>,
    image: bran,
    description:
      'Castelul Bran este unul dintre cele mai populare castele din România, vizitat atât de turiștii români, dar și de cei străini. Legenda lui Dracula face din castelul Bran unul dintre cele mai căutate obiective turistice de la noi din țară. Castelul Bran a fost construit între anii 1226 și 1388, fiind inițial o unitate militară de apărarea. Ulterior a fost modificat și transformat în cetate.',
  },
  brasov: {
    title: <a href="https://www.brasovcity.ro/">Brasov</a>,
    image: brasov,
    description:
      'Așezat în centrul țării, acolo unde s-au întâlnit dintotdeauna drumurile ce au legat teritoriile istorice românești, Brașovul a fost și rămâne o punte de legătură și de circulație a valorilor materiale și spirituale și o zonă de simbioză între cultura românească și cea a naționalităților conlocuitoare. Prin poziția geografică favorabilă, prin valorile sale naturale și culturale, precum și prin dezvoltarea economică, vechiul burg săsesc sau "Orașul Coroanei" exercită o mare capacitate de atracție atât pentru turiștii români, cât și pentru cei străini.',
  },
  canionul_7_scari: {
    title: <a href="https://canionul7scari.ro/">Brasov</a>,
    image: canionul_7_scari,
    description:
      'Canionul Șapte Scări este un defileu săpat în calcare jurasice din partea vestică a munților Piatra Mare, în județul Brașov, România. Lungimea lor este de 160 metri cu o diferență de nivel de 58 de metri, la o altitudine de 948 metri. Defileul este format din șapte trepte cu înalțimi între 2,5 și 15 metri, care îi dau numele și care se transformă în cascade când volumul de apă al pârâului Valea Șurii de Piatră, afluent de stânga al Șipoaiei, este ridicat. Traseul poate fi parcurs cu ajutorul unor scări, nefiind nevoie de echipament specializat.',
  },
};
export const EXTERIOR = [
  {
    image: exterior,
    title: 'Fantasy',
    description: '',
    num: 5,
  },
  {
    image: exterior1,
    title: 'Fantasy',
    description: '',
    num: 6,
  },
  {
    image: foisor,
    title: 'Foisor',
    description: '',
    num: 7,
  },
  {
    image: gratar,
    title: 'Gratar',
    description: '',
    num: 8,
  },
];
export const LIVING_ROOM = [
  {
    image: exterior,
    title: 'Fantasy',
    description: '',
    num: 5,
  },
  {
    image: exterior1,
    title: 'Fantasy',
    description: '',
    num: 6,
  },
  {
    image: foisor,
    title: 'Foisor',
    description: '',
    num: 7,
  },
  {
    image: gratar,
    title: 'Gratar',
    description: '',
    num: 8,
  },
];
export const CAMERA_DUBLA = [
  {
    image: exterior,
    title: 'Fantasy',
    description: '',
    num: 5,
  },
  {
    image: exterior1,
    title: 'Fantasy',
    description: '',
    num: 6,
  },
  {
    image: foisor,
    title: 'Foisor',
    description: '',
    num: 7,
  },
  {
    image: gratar,
    title: 'Gratar',
    description: '',
    num: 8,
  },
];
export const APARTAMENT = [
  {
    image: exterior,
    title: 'Fantasy',
    description: '',
    num: 5,
  },
  {
    image: exterior1,
    title: 'Fantasy',
    description: '',
    num: 6,
  },
  {
    image: foisor,
    title: 'Foisor',
    description: '',
    num: 7,
  },
  {
    image: gratar,
    title: 'Gratar',
    description: '',
    num: 8,
  },
];
