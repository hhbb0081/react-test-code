import styled from 'styled-components';

export default function Button ({ children }) {
    return (
        <ButtonBox>
            {children}
        </ButtonBox>
    );
}

export const ButtonBox = styled.button`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #fdb755;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
`;
