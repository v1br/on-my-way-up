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

    // Bounds
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

    // World
    bg = this.add.image(game_width / 2, game_height / 2, "sky");
    bg.setScrollFactor(0);

    platforms = this.physics.add.staticGroup();
    fruits = this.physics.add.group();

    // Player
    player = this.physics.add.sprite(
      player_start_x,
      player_start_y,
      "dude_idle"
    );
    player.setCollideWorldBounds(true);

    // Camera
    cam = this.cameras.main;
    cam.setSize(game_width, game_height);
    cam.setBounds(
      camera_bounds_x,
      camera_bounds_y,
      camera_bounds_width,
      camera_bounds_height
    );
    cam.startFollow(player);

    // Collisions
    this.physics.add.collider(platforms, player);
    this.physics.add.collider(platforms, fruits);
    this.physics.add.collider(player, fruits, collect_fruit, null, this);

    // Animations

    this.anims.create({
      key: "strawberry",
      frames: this.anims.generateFrameNumbers("strawberry", {
        start: 0,
        end: 16,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("dude_idle", {
        start: 0,
        end: 10,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("dude_jump", {
        start: 0,
        end: 0,
      }),
    });

    this.anims.create({
      key: "fall",
      frames: this.anims.generateFrameNumbers("dude_fall", {
        start: 0,
        end: 0,
      }),
    });

    // Object constructors
    build_platforms(platforms);
    spread_fruits(fruits, "strawberry");
  },

  update() {
    move_player(player);
    move_camera(cam);
  },
};
