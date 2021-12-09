import { Scene } from "./Scene";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Second } from "./Second";

export class First extends Scene {
  private title: Text;
  private soundWave: Sprite;

  constructor() {
    super();

    this.title = new Text("Parts of a Wave", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.soundWave = Sprite.from("sound wave");

    this.soundWave.scale.set(1);
    this.soundWave.anchor.set(0.5);
    this.soundWave.x = Manager.width / 2;
    this.soundWave.y = Manager.height / 2;
    this.addChild(this.soundWave);
  }

  override nextScreen() {
    Manager.changeScene(new Second());
  }
}