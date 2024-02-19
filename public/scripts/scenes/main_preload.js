function main_preload() {
  // Sky
  this.load.image("sky", "assets/tiles/sky.png");

  // Terrain
  this.load.spritesheet("grass", "assets/tiles/grass_tilemap.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  // Trampoline sprites
  this.load.spritesheet("trampoline_idle", "assets/traps/trampoline/idle.png", {
    frameWidth: 28,
    frameHeight: 28,
  });

  this.load.spritesheet("trampoline_jump", "assets/traps/trampoline/jump.png", {
    frameWidth: 28,
    frameHeight: 28,
  });

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
