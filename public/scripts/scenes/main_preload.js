function main_preload() {

  // Background music

  // Sound effects
  this.load.audio("a_jump", "audio/sounds/jump.wav");
  this.load.audio("a_hurt", "audio/sounds/hurt.wav");

  // Background sprites
  this.load.image("sky", "assets/tiles/sky.png");

  // Trap sprites
  this.load.image("spike", "assets/traps/spikes/idle.png");

  this.load.spritesheet("saw_on", "assets/traps/saw/on.png", {
    frameWidth: 38,
    frameHeight: 38,
  });

  this.load.spritesheet("mover_off", "assets/traps/movers/off.png", {
    frameWidth: 32,
    frameHeight: 10,
  });

  this.load.spritesheet("mover_on", "assets/traps/movers/on.png", {
    frameWidth: 32,
    frameHeight: 10,
  });

  this.load.spritesheet("rock_idle", "assets/traps/rock/idle.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  this.load.spritesheet("rock_blink", "assets/traps/rock/blink.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  this.load.spritesheet("rock_bottom_hit", "assets/traps/rock/bottom_hit.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  this.load.spritesheet("rock_top_hit", "assets/traps/rock/top_hit.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  this.load.spritesheet("rock_left_hit", "assets/traps/rock/left_hit.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  this.load.spritesheet("rock_right_hit", "assets/traps/rock/right_hit.png", {
    frameWidth: 42,
    frameHeight: 42,
  });

  // Platform sprites
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

  this.load.spritesheet("melon", "assets/fruits/melon.png", {
    frameWidth: 32,
    frameHeight: 32,
  });

  this.load.spritesheet("pineapple", "assets/fruits/pineapple.png", {
    frameWidth: 32,
    frameHeight: 32,
  })

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

  this.load.spritesheet("frog_hit", "assets/frog/hit.png", {
    frameWidth: 32,
    frameHeight: 32,
  });
}
