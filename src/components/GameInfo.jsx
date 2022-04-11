import React from 'react';
import styled from 'styled-components';
import GameInfo1 from '../assets/buy-sell-1.png';
import GameInfo2 from '../assets/buy-sell-2.png';
import GameInfo3 from '../assets/buy-sell-3.png';

export default function GameInfo() {
  return (
    <Section>
      <div className="row">
        <div className="col" id="gameInfo1">
          <img src={GameInfo1} alt="Game Info 1" />
          <div className="text">
            <h2>
              Game Info of Earthium <span>Structure</span> and
              <span> Characters</span>
            </h2>
          </div>
        </div>
        <div className="col" id="gameInfo2">
          <h2>
            Lorem, ipsum dolor sit amet
            <span> consectetur </span>
            adipisicing elit.
          </h2>
          <img src={GameInfo2} alt="Game Info 2" />
        </div>
        <div className="col" id="gameInfo3">
          <img src={GameInfo3} alt="Game Info 3" />
          <h2>
            Play <span>Earthium</span>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </h2>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 6rem 10rem;
  .row {
    display: flex;
    gap: 8rem;
    flex-direction: column;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        height: 60vh;
      }
      h2 {
        font-size: 3rem;
        span {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .row {
      gap: 2rem;
      .col {
        flex-direction: column;
        text-align: center;
        img {
          height: 10rem;
        }
        h2 {
          font-size: 1.5rem;
        }
        &:nth-of-type(2) {
          flex-direction: column-reverse;
        }
      }
    }
  }
`;
