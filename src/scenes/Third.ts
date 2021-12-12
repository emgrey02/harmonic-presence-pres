import { Scene } from "./Scene";
import { Sprite, Text, Ticker } from "pixi.js";
import { Manager } from "../Manager";
import { Fourth } from "./Fourth";

export class Third extends Scene {
  private title: Text;
  private graph: Sprite;
  private change: number = 10;

  constructor() {
    super();

    this.title = new Text("Frequency-Pitch Relationship", Scene.getTextStyle());
    this.addChild(this.title);
    this.title.anchor.set(0.5);
    this.title.x = Manager.width / 2;
    this.title.y = Manager.height / 12;

    this.graph = Sprite.from("graph");

    this.graph.anchor.set(0.5);
    this.graph.x = Manager.width / 2;
    this.graph.y = 0;
    this.graph.scale.set(0.8);

    this.addChild(this.graph);

    let ticker: Ticker = Ticker.shared;
    ticker.add(this.update, this);
    ticker.start();
  }

  private update = (deltaTime: number): void => {
    this.graph.y = this.graph.y + this.change * deltaTime;
    if (this.graph.y >= Manager.height / 2) {
      this.graph.y = Manager.height / 2;
    }
  };

  override nextScreen() {
    Manager.changeScene(new Fourth());
  }
}
