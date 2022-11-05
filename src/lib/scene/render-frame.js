import { scene } from ".";

const renderFrame = (delta) => {
  const {
    ctx1,
    ctx2,
    ctx3,
    ctx4,
    floorCanvas,
    entityCanvas,
    view,
    effectsMiddle,
    effectsTop,
    entities,
    canvas1: { width, height },
  } = scene;
  const { translate } = view;

  ctx2.clearRect(-translate.x, -translate.y, width, height);
  effectsMiddle();

  entities.forEach((entity) => {
    entity.update(delta);
  });

  ctx3.clearRect(-translate.x, -translate.y, width, height);
  ctx3.drawImage(entityCanvas, 0, 0);

  ctx4.clearRect(-translate.x, -translate.y, width, height);
  effectsTop();
};

const renderStaticFrame = () => {
  const {
    ctx1,
    ctx3,
    floorCanvas,
    entityCanvas,
    view,
    canvas1: { width, height },
  } = scene;

  const { translate } = view;

  ctx1.clearRect(-translate.x, -translate.y, width, height);
  ctx1.drawImage(floorCanvas, 0, 0);

  ctx3.clearRect(-translate.x, -translate.y, width, height);
  ctx3.drawImage(entityCanvas, 0, 0);
};

export { renderFrame, renderStaticFrame };
