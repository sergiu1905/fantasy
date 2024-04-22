import TabButtons from '../TabButtons.jsx';
import { useState } from 'react';
import { ATRACTII } from '../../data.jsx';
import SectionModel from '../SectionModel.jsx';
import './AtractionArea.css';
export default function AtractionsArea() {
  const [atraction, setAtraction] = useState();
  let tabAtraction = (
    <h2>Cateva atractii si pe activitati care le-ai putea gasi interesante </h2>
  );
  if (atraction) {
    tabAtraction = (
      <div id="tab-atractions">
        <h2>{ATRACTII[atraction].title}</h2>
        <div id="info-atraction">
          <img src={ATRACTII[atraction].image} alt="" />
          <p>{ATRACTII[atraction].description}</p>
        </div>
      </div>
    );
  }

  function handleClick(touristicAtraction) {
    setAtraction(touristicAtraction);
    console.log(touristicAtraction);
  }
  return (
    <SectionModel id="atractions">
      <menu>
        <TabButtons
          selectedBtn={atraction === 'partia_clabucet'}
          onSelectedClick={() => handleClick('partia_clabucet')}
        >
          Partia Clabucet
        </TabButtons>
        <TabButtons
          selectedBtn={atraction === 'castelul_peles'}
          onSelectedClick={() => handleClick('castelul_peles')}
        >
          Castelul Peles
        </TabButtons>
        <TabButtons
          selectedBtn={atraction === 'castelul_bran'}
          onSelectedClick={() => handleClick('castelul_bran')}
        >
          Castelul Bran
        </TabButtons>
        <TabButtons
          selectedBtn={atraction === 'brasov'}
          onSelectedClick={() => handleClick('brasov')}
        >
          Brasov
        </TabButtons>
        <TabButtons
          selectedBtn={atraction === 'canionul_7_scari'}
          onSelectedClick={() => handleClick('canionul_7_scari')}
        >
          Canionul 7 Scari
        </TabButtons>
      </menu>

      {tabAtraction}
    </SectionModel>
  );
}
