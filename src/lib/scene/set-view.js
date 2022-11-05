import { scene, renderStaticFrame } from ".";
import { tileWidth, tileHeight, paddingBottom, paddingTop } from "../constants";

const setView = ({ xTiles, yTiles }) => {
  const { ctx1, canvas1, canvasRoot } = scene;

  const baseHeight = ((xTiles + yTiles) / 2) * tileHeight;

  // Canvas dimensions once padding is included
  const width = ((xTiles + yTiles) / 2) * tileWidth;
  const height = baseHeight + paddingBottom + paddingTop;

  // Sets floor and entity canvas size
  scene.floorCanvas.width = scene.entityCanvas.width = width;
  scene.floorCanvas.height = scene.entityCanvas.height = height;

  // The exactly fits the grid in the center on the Y axis
  const baseOriginY =
    baseHeight / 2 -
    (tileHeight / 4) * (yTiles - xTiles) -
    tileHeight / 2 +
    paddingTop;

  // Used to caculate the position of the grid relative to the canvas
  const origin = {
    x: 0,
    y: baseOriginY,
  };

  const translate = {
    x: 0,
    y: 0,
  };

  const setApertureSize = () => {
    canvas1.width = canvasRoot.clientWidth;
    canvas1.height = canvasRoot.clientHeight;
    // Resets translation wiped out by resize
    ctx1.setTransform(1, 0, 0, 1, translate.x, translate.y);
  };

  onresize = () => {
    setApertureSize();
    renderStaticFrame();
  };

  return {
    origin,
    xTiles,
    yTiles,
    translate,
    setApertureSize,
  };
};

export { setView };
