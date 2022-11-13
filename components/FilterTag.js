import React from 'react';

import styled from 'styled-components';

export default function Association({ name, setFilterLabels, filterLabels }) {
  function toggleFilter(arr, name) {
    arr.includes(name) ? setFilterLabels(arr.filter((i) => i !== name)) : setFilterLabels([...arr, name]);
  }
  return (
    <Tag>
      <TagInput type="checkbox" onChange={() => toggleFilter(filterLabels, name)} value={name} />
      <TagText>{name}</TagText>
    </Tag>
  );
}

const Tag = styled.label`
  display: block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const TagText = styled.span`
  display: block;
  padding: 0.3em 0.9em;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 4px;
  font-size: 1.1rem;
  &::first-letter {
    text-transform: capitalize;
  }
  @media (min-width: 720px) {
    font-size: 1.2rem;
  }
`;

const TagInput = styled.input`
  position: absolute;
  left: 10px;
  opacity: 0;
  &:checked + ${TagText} {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
  }
`;
