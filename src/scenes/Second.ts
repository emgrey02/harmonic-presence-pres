import { Scene } from "./Scene";
import { sound } from "@pixi/sound";
import { Sprite, Text } from "pixi.js";
import { Manager } from "../Manager";
import { Third } from "./Third";

export class Second extends Scene {
  private title: Text;
  private highFreq: Sprite;
  private lowFreq: Sprite;

  constructor() {
    super();

    this.title = new Text("Pitch", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.x = Manager.width / 2 - this.title.width / 2;
    this.title.y = Manager.height / 10;

    this.highFreq = Sprite.from("high wave");
    this.lowFreq = Sprite.from("low wave");

    this.lowFreq.anchor.set(0.5);
    this.lowFreq.x = Manager.width - Manager.width / 3;
    this.lowFreq.y = Manager.height / 2;
    this.lowFreq.scale.set(0.8);
    this.lowFreq.interactive = true;

    this.lowFreq.on("pointerover", () => {
      this.lowFreq.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.lowFreq.on("pointerout", () => {
      this.lowFreq.tint = 0xffffff;

      document.body.style.cursor = "default";
    });
    this.lowFreq.on("pointerdown", () => {
      this.lowFreq.scale.set(0.75);
      sound.volume("low sound", 0.8);
      sound.play("low sound");
      setTimeout(() => sound.pause("low sound"), 2000);
    });
    this.lowFreq.on("pointerup", () => {
      this.lowFreq.scale.set(0.8);
    });

    this.highFreq.anchor.set(0.5);
    this.highFreq.x = Manager.width / 3;
    this.highFreq.y = Manager.height / 2;
    this.highFreq.scale.set(0.8);

    this.highFreq.interactive = true;
    this.highFreq.on("pointerover", () => {
      this.highFreq.tint = 0xade0ff;
      document.body.style.cursor = "pointer";
    });
    this.highFreq.on("pointerout", () => {
      this.highFreq.tint = 0xffffff;
      document.body.style.cursor = "default";
    });
    this.highFreq.on("pointerdown", () => {
      this.highFreq.scale.set(0.75);
      sound.volume("high sound", 0.2);
      sound.play("high sound");
      setTimeout(() => sound.pause("high sound"), 2000);
    });
    this.highFreq.on("pointerup", () => {
      this.highFreq.scale.set(0.8);
    });

    this.addChild(this.highFreq);
    this.addChild(this.lowFreq);
  }

  override nextScreen() {
    Manager.changeScene(new Third());
  }
}