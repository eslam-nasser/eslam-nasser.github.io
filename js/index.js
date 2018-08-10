import init from './init';
import renderer from './world/renderer';
import controls from './world/controls';
import animate from './animate';

init();
animate(renderer, controls);
