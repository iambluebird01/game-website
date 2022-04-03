import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import image from '../assets/earth.png';
import Button from './Button.jsx';
import { RiGamepadFill } from 'react-icons/ri';
export default function Home() {
  return (
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Earthium</span> is a RPG strategic game
        </h1>
        <p>
          Where you can fight other, <span className="highlight"> player </span>
          and
          <span className="highlight"> computer </span>
          by bulding up your equipments and increasing your level. Welcome!
        </p>
        <Button text="Game Start" icon={<RiGamepadFill />} />
      </div>
      <div className="image"></div>
    </Section>
  );
}

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  .image {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0.05em auto;
    background-image: url(${image});
    border-radius: 50%;
    border-color: red;
    background-size: 630px;
    animation: rotate 10s linear infinite;
    transition: transform 200ms linear;
    transform-style: preserve-3d;
    box-shadow: inset 20px 0 80px 6px rgb(0, 0, 0);
    color: #000;
  }

  @keyframes rotate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 630px 0;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
