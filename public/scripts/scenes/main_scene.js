Main = {
  preload: main_preload,

  create() {

    // Controls
    this.controls = {
      w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
      up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
      space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
    };

    // Sounds
    this.jumpsound = this.sound.add("a_jump", {volume: 0.05});
    this.hurtsound = this.sound.add("a_hurt", {volume: 0.05});

    // World
    this.timer = this.time;
    this.bg = this.add.image(game_width / 2, game_height / 2, "sky");
    this.bg.setScrollFactor(0);
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
    fruits = this.physics.add.staticGroup();
    fans = this.physics.add.staticGroup();
    trampolines = this.physics.add.staticGroup();
    spikes = this.physics.add.staticGroup();
    saws = this.physics.add.staticGroup();

    // Player
    player = this.physics.add.sprite(
      player_start_x,
      player_start_y,
      "frog_idle"
    );
    player.setSize(24, 32);
    player.setCollideWorldBounds(true);
    player.rightfacing = true;
    player.ishurting = false;
    player.damagedat = 0;

    // Camera
    camera = this.cameras.main;
    camera.setSize(game_width, game_height);
    camera.setBounds(
      world_bounds_x,
      world_bounds_y,
      world_bounds_width,
      world_bounds_height
    );
    camera.startFollow(player);

    // Animations
    animate_scene(this.anims);

    // Collisions
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, fans);
    this.physics.add.collider(player, saws, get_hit, null, this);
    this.physics.add.collider(player, spikes, get_hit, null, this);
    this.physics.add.collider(player, trampolines, bounce_off, null, this);
    this.physics.add.collider(player, fruits, collect_fruit, null, this);

    // Constructors
    build_platforms(platforms);
    build_trampolines(trampolines);
    build_fans(fans);
    build_spikes(spikes);
    build_saws(saws);
    spread_fruits(fruits);
  },

  update() {
    move_player(this, player);
    move_camera(camera);
    detect_fan(player, fans);
  },
};
