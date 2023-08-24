import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
`

export const Title = styled.h2`
  line-height: 1.3;
`

export const Option = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 60px;
  margin: 8px;
  border: none;
  background-color: ${({backgroundcolor}) => backgroundcolor};
  transition: scale 250ms linear;
  border: ${({currentidx, idx}) => idx === currentidx ? '3px solid black' : 'none'}

  &:hover{
    transform: scale(1.1);
  }
`