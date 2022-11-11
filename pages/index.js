import { useState } from 'react';

import styled from 'styled-components';

import Association from '../components/Association';
import FilterTag from '../components/FilterTag';

export async function getStaticProps() {
  const res = await fetch('https://www.dnt.no/api/v3/iprospect_pilot/foreninger/?format=json');
  const associations = await res.json();

  return {
    props: {
      associations,
    },
  };
}

export default function Home({ associations }) {
  const associationsLabelArr = associations.results.map((association) => {
    let associationArr = [];
    associationArr = association.type;

    return associationArr;
  });

  const [filterLabels, setFilterLabels] = useState([]);

  const associationsLabels = [...new Set(associationsLabelArr)];

  const filteredAssoc = filterLabels.length
    ? associations.results.filter((item) => filterLabels.includes(item.type))
    : associations.results;

  return (
    <>
      <Main>
        <FilterContainer>
          <h2>Filtrer på foreninger/grupper</h2>
          {associationsLabels.map((label) => (
            <FilterTag setFilterLabels={setFilterLabels} filterLabels={filterLabels} key={label} name={label} />
          ))}
        </FilterContainer>
        {filteredAssoc.map((association) => (
          <Association
            key={association.id}
            name={association.name}
            typeName={association.typeName}
            groupTypeName={association.groupTypeName}
            id={association.id}
          />
        ))}
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: var(--maxWidth);
  margin: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
