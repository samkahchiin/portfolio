/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Subtitle = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 100;
  font-size: 1.5rem;
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px -15px;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(211, 211, 211, 0.397);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;

export const Carousel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem 1rem;
`;

export const CardImageDiv = styled.div`
  position: relative;
  margin-top: 1rem;
  height: 250px;
  overflow: hidden;
  text-align: center;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;

    max-width: 100%;
    height: auto;
    width: 250px;
  }
`;

export const CardDetailsDiv = styled.div`
  text-align: center;
`;

export const CardTitle = styled.div`
  color: #000000;
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  margin: 2rem 0 2rem 0;
`;

export const CardSubtitle = styled.div`
  color: #666666;
  font-size: 17px;
  line-height: 1.5rem;
  font-weight: 100;
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardTag = styled.div`
  background: ${({ buttonColor }) => buttonColor};
  vertical-align: middle;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  white-space: nowrap;
  line-height: 1.5;
  margin: 0 0.5rem 0.5rem 0;
  padding: 0 0.75em;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: ${({ hoverBackground }) => hoverBackground};
  }
`;
