import styled from 'styled-components';

import Association from '../components/Association';

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
  return (
    <div>
      <Main>
        {associations.results.map((association) => (
          <Association
            key={association.id}
            name={association.name}
            typeName={association.typeName}
            groupTypeName={association.groupTypeName}
            id={association.id}
          />
        ))}
      </Main>
    </div>
  );
}

const Main = styled.main`
  max-width: var(--maxWidth);
  margin: auto;
`;
