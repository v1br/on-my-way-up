Main = {
  preload: main_preload,

  create() {
    // Inputs
    controls = {
      w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
    };

    this.input.addPointer(2);

    // World
    bg = this.add.image(game_width / 2, game_height / 2, "sky");
    bg.setScrollFactor(0);

    this.physics.world.setBounds(
      world_bounds_x,
      world_bounds_y,
      world_bounds_width,
      world_bounds_height,
      true,
      true,
      false,
      true
    );

    // Objects
    platforms = this.physics.add.staticGroup();
    fans = this.physics.add.staticGroup();
    fruits = this.physics.add.staticGroup();

    // Player
    player = this.physics.add.sprite(
      player_start_x,
      player_start_y,
      "frog_idle"
    );
    player.setCollideWorldBounds(true);

    // Camera
    cam = this.cameras.main;
    cam.setSize(game_width, game_height);
    cam.setBounds(
      world_bounds_x,
      world_bounds_y,
      world_bounds_width,
      world_bounds_height
    );
    cam.startFollow(player);

    // Collisions
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, fans);
    this.physics.add.collider(player, fruits, collect_fruit, null, this);

    // Animations
    animate_fans(this.anims);
    animate_fruits(this.anims);
    animate_player(this.anims);

    // Object constructors
    build_platforms(platforms);
    build_fans(fans);
    spread_fruits(fruits);
  },

  update() {
    move_player(player);
    move_camera(cam);
  },
};
