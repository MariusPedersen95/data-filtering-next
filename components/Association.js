import React from 'react';

import styled from 'styled-components';

export default function Association({ name, typeName, id, groupTypeName }) {
  return (
    <AssociationContainer>
      <AssociationContent>
        <h2>{name}</h2>
        <p>{typeName}</p>
      </AssociationContent>
      <AssociationLogoContainer>
        <AssociationName>{groupTypeName ? groupTypeName : name}</AssociationName>
        <Logo>
          <img src="dnt-logo.svg" />
        </Logo>
      </AssociationLogoContainer>
    </AssociationContainer>
  );
}

const AssociationContainer = styled.div`
  display: flex;
  color: black;
  margin-bottom: 15px;
`;

const AssociationContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  h2 {
    font-size: 1.1rem;
  }
  p {
    font-size: 1rem;
  }
`;

const AssociationLogoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  justify-content: end;
  @media (min-width: 720px) {
    height: 52px;
  }
`;

const AssociationName = styled.span`
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 10px;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
  @media (min-width: 720px) {
    max-width: 100%;
    padding: 15px 18px;
    margin-right: 5px;
    font-size: 16px;
  }
`;

const Logo = styled.span`
  background-color: var(--primary);
  padding: 5px;
  img {
    height: 30px;
    @media (min-width: 720px) {
      height: 42px;
    }
  }
`;
