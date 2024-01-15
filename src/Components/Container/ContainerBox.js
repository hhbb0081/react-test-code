import styled from 'styled-components';

export default function ContainerBox ({ children }) {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  );
}

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 778px;
  margin: auto;
  padding: 0 20px;
`;
