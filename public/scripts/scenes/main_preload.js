function main_preload() {
  // Images
  this.load.image("sky", "assets/tiles/sky.png");
  this.load.image("grass_top", "assets/tiles/grass_top.png");
  this.load.image("grass_left", "assets/tiles/grass_left.png");
  this.load.image("grass_right", "assets/tiles/grass_right.png");
  this.load.image("grass_fill", "assets/tiles/grass_fill.png");
  this.load.image("grass_fill_top", "assets/tiles/grass_fill_top.png");

  // Spritesheets
  this.load.spritesheet("dude_run", "assets/dude/run.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("dude_idle", "assets/dude/idle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("dude_jump", "assets/dude/jump.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("dude_fall", "assets/dude/fall.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
}
