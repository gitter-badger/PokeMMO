import { TextureCache } from "../utils";
import {
  DIMENSION,
  GOD_MODE, EDIT_MODE,
  FREE_CAMERA,
  SHADOW_Y
} from "../../cfg";

/**
 * Render debug scene
 */
export function renderDebugScene() {

  let color = '#313131';

  this.drawPixelText(
    `WIDTH: ${this.width} HEIGHT ${this.height}`,
    15, 30,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `DIMENSION: ${DIMENSION}`,
    15, 60,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `X: ${this.camera.x.toFixed(2)} Y: ${this.camera.y.toFixed(2)}`,
    15, 90,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `DELTA: ${this.delta * 1E3} ms`,
    15, 120,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `SCALE: ${this.camera.resolution.toFixed(6)}`,
    15, 150,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `ENTITIES: ${this.instance.currentMap.entities.length}`,
    15, 180,
    20, 1.5,
    color
  );

  let ii = 0;
  let kk = 0;

  let length = 0;

  let entities = this.instance.currentMap.entities;

  length = entities.length;

  for (; ii < length; ++ii) {
    if (this.instance.camera.isInView(
      entities[ii].position.x, entities[ii].position.y,
      entities[ii].size.x, (entities[ii].size.y * 2) + entities[ii].shadowY
    ) && ++kk) {}
  };

  this.drawPixelText(
    `ENTITIES IN VIEW: ${kk}`,
    15, 210,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `TEXTURES: ${Object.keys(TextureCache).length}`,
    15, 240,
    20, 1.5
  );

  if (this.instance.localEntity !== null) {
    this.drawPixelText(
      `LOCAL X: ${this.instance.localEntity.x} Y: ${this.instance.localEntity.y.toFixed(2)} LOCAL Z: ${-this.instance.localEntity.z.toFixed(4)}`,
      15, 270,
      20, 1.5,
    color
    );
  }

  this.drawPixelText(
    `COMMAND STACK: ${this.instance.editor.commander.position + 1} | ${this.instance.editor.commander.stack.length}`,
    15, 300,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `GOD MODE: ${GOD_MODE === true ? "enabled" : "disabled"}`,
    15, 330,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `FREE CAMERA: ${FREE_CAMERA === true ? "enabled" : "disabled"}`,
    15, 360,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `EDIT MODE: ${EDIT_MODE === true ? "enabled" : "disabled"}`,
    15, 390,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `C: JUMP`,
    15, this.height - 60,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `X: RUN`,
    90, this.height - 60,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `Z: ACTION`,
    155, this.height - 60,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `CTRL+Z: UNDO`,
    15, this.height - 35,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `CTRL+Y: REDO`,
    140, this.height - 35,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `CTRL+C: COPY`,
    265, this.height - 35,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `CTRL+V: PASTE`,
    390, this.height - 35,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `CTRL+X: CUT`,
    525, this.height - 35,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `F1: DEBUG MODE`,
    15, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `F2: EDIT MODE`,
    155, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `F3: FREE CAMERA`,
    290, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `F4: GOD MODE`,
    450, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `SPACE: PLAYER FOCUS`,
    575, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `WHEEL: ZOOM`,
    770, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `R-MOUSE: DRAG MAP`,
    890, this.height - 10,
    20, 1.5,
    color
  );

  this.drawPixelText(
    `DBLCLICK: FOCUS ENTITY`,
    1065, this.height - 10,
    20, 1.5,
    color
  );

}