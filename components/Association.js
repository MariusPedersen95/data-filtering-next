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
`;

const AssociationLogoContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 52px;
  justify-content: end;
`;

const AssociationName = styled.span`
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 18px;
  margin-right: 5px;
`;

const Logo = styled.span`
  background-color: var(--primary);
  padding: 5px;
`;
