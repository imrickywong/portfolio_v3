import { EMAIL_URL } from './misc.js';

export default {
  // NOTE: The texts are static, so let's take advantage of that
  // and save ms from useless getBoundingClientRect, shall we?
  MORPH: {
    text: '',
    width: '20rem' /* same as circle */,
    height: '20rem',
  },
  DOTS: {
    text: [
      `把精美的设计和与优雅的代码结合在一起是我的专长。作为一名前端工程师，我最大的职责就是赋能设计师，避免技术阻碍用户体验。`,
    ],
    width: '52rem',
    height: '22rem',
  },
  ASK: {
    text: [
      '沟通力与思考力是我每天工作的底层基础',
      '<strong>不惧提问</strong> <br/> 在提问中扫清障碍，逐一击破',
      '<strong>发掘创新</strong> <br/> 努力打造用户体验中的 <a class="u-link" rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Eureka_effect">A Ha</a> 时刻。',
    ],
    width: '32rem',
    height: '32rem',
  },
  WOLF: {
    text: [
      '如果需要我解决项目中棘手的困难，我能够坚定的攻克难题，埋头苦干，成为一名出色的 problem-solver',
      `但当需要一个人站出来带领整个项目时，我也能毫无犹豫的站出来，以 project-owner 的身份迎接挑战!`,
    ],
    width: '31.4rem',
    height: '40rem',
  },
  PEOPLE: {
    text: [
      '我认为我一直在持续寻找破坏性又务实的解决方案。这种对创新、挑战、突破传统的渴望深植在我的性格之中，而务实、稳健的方法逻辑在另一边牵引着我，在我的工作生活中努力达到一个优雅的平衡。',
    ],
    width: '67rem',
    height: '15rem',
  },
  FINALLE: {
    text: '',
    width: '100vw',
    height: '100vh',
  },
};
