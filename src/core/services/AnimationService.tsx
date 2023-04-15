import { keyframes } from '@emotion/react';

enum ANIMATION_TYPE {
  BOUNCE = 'BOUNCE',
  ROTATE = 'ROTATE',
}

const ANIMATION_KEYFRAMES = {
  [ANIMATION_TYPE.BOUNCE]: keyframes`
  0% { transform: translateY(0%) }
  50% { transform: translateY(25%) }
  100% {  transform: translateY(0%) }
`,
  [ANIMATION_TYPE.ROTATE]: keyframes`
  0% { transform:  rotate(0); }
  100% { transform:  rotate(360deg); }
`,
};

const ANIMATION = {
  [ANIMATION_TYPE.BOUNCE]: `${ANIMATION_KEYFRAMES[ANIMATION_TYPE.BOUNCE]} 3s ease-in-out infinite`,
  [ANIMATION_TYPE.ROTATE]: `${ANIMATION_KEYFRAMES[ANIMATION_TYPE.ROTATE]} 25s ease-in-out infinite`,
};

export { ANIMATION_TYPE, ANIMATION };
