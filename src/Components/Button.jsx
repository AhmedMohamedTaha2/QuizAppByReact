import React from 'react';
import styled from 'styled-components';

const Buttoon = ({dispatch}) => {
  function handleClick() {
    dispatch({type:"loading" });
  }

  return (
    <StyledWrapper>
      <button onClick={()=> handleClick()} className="btn">Start Quiz</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    --border-color: linear-gradient(-45deg, #11c6fb, #115bea, #11d2ff);
    --border-width: 0.125em;
    --curve-size: 0.5em;
    --blur: 30px;
    --bg: linear-gradient(
      45deg,
      rgba(0, 198, 251, 0.5),
      rgba(0, 91, 234, 0.5),
      rgba(0, 210, 255, 0.5)
    );
    --color: #e0f7fa;
    color: var(--color);
    cursor: pointer;
    /* use position: relative; so that BG is only for .btn */
    position: relative;
    isolation: isolate;
    display: inline-grid;
    place-content: center;
    padding: 0.5em 1.5em;
    font-size: 17px;
    border: 0;
    text-transform: uppercase;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
    clip-path: polygon(
      /* Top-left */ 0% var(--curve-size),
      var(--curve-size) 0,
      /* top-right */ 100% 0,
      100% calc(100% - var(--curve-size)),
      /* bottom-right 1 */ calc(100% - var(--curve-size)) 100%,
      /* bottom-right 2 */ 0 100%
    );
    transition: color 250ms;
  }

  .btn::after,
  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
  }

  .btn::before {
    background: var(--border-color);
    background-size: 300% 300%;
    animation: move-bg7234 5s ease infinite;
    z-index: -2;
  }

  @keyframes move-bg7234 {
    0% {
      background-position: 31% 0%;
    }

    50% {
      background-position: 70% 100%;
    }

    100% {
      background-position: 31% 0%;
    }
  }

  .btn::after {
    background: var(--bg);
    z-index: -1;
    clip-path: polygon(
      /* Top-left */ var(--border-width)
        calc(var(--curve-size) + var(--border-width) * 0.5),
      calc(var(--curve-size) + var(--border-width) * 0.5) var(--border-width),
      /* top-right */ calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      /* bottom-right 1 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      /* bottom-right 2 */ var(--border-width) calc(100% - var(--border-width))
    );
    transition: clip-path 500ms;
  }

  .btn:where(:hover, :focus)::after {
    clip-path: polygon(
      /* Top-left */ calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      calc(100% - var(--border-width)) var(--border-width),
      /* top-right */ calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5)),
      /* bottom-right 1 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width)),
      /* bottom-right 2 */
        calc(100% - calc(var(--curve-size) + var(--border-width) * 0.5))
        calc(100% - var(--border-width))
    );
    transition: 200ms;
  }

  .btn:where(:hover, :focus) {
    color: #fff;
  }`;

export default Buttoon;
