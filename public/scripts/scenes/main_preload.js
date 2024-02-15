function main_preload() {
  // Terrain
  this.load.image("sky", "assets/tiles/sky.png");
  this.load.image("grass_top", "assets/tiles/grass_top.png");
  this.load.image("grass_left", "assets/tiles/grass_left.png");
  this.load.image("grass_right", "assets/tiles/grass_right.png");
  this.load.image("grass_fill", "assets/tiles/grass_fill.png");
  this.load.image("grass_fill_top", "assets/tiles/grass_fill_top.png");

  // Fan sprites
  this.load.spritesheet("fan_off", "assets/traps/fan/off.png", {
    frameWidth: 24,
    frameHeight: 8,
  });

  this.load.spritesheet("fan_on", "assets/traps/fan/on.png", {
    frameWidth: 24,
    frameHeight: 8,
  });

  // Fruit sprites
  this.load.spritesheet("strawberry", "assets/fruits/strawberry.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  // Player sprites
  this.load.spritesheet("frog_run", "assets/frog/run.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("frog_idle", "assets/frog/idle.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("frog_jump", "assets/frog/jump.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("frog_fall", "assets/frog/fall.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
}
