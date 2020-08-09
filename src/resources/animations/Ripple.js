import { keyframes } from 'styled-components';

export const Ripple  = keyframes`
  0% {
    opacity: 1;
    transform: scale3d(0.75,0.75,1);
  }

  100% {
    opacity: 0;
    transform: scale3d(1.5,1.5,1);
  }
`
