Main = {
  preload() {
    // Backgrounds
    this.load.image("sky", "assets/tiles/sky.png");
    this.load.image("ground_grass", "assets/tiles/ground_grass.png");

    // Dude Spritesheet
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
  },

  create() {
    // Background
    this.add.image(game_width / 2, game_height / 2, "sky");
    this.physics.world.setBounds(
      0,
      0,
      game_width,
      game_height,
      true,
      true,
      false,
      true
    );

    // Inputs
    cursors = this.input.keyboard.createCursorKeys();

    // Platforms
    platforms = this.physics.add.staticGroup();

    for (i = 0; i < 7; i++) {
      platforms.create(
        large_tile_width * i + large_tile_width / 2,
        game_height - large_tile_height / 2 + 1,
        "ground_grass"
      );
    }

    // Player
    player = this.physics.add.sprite(100, 450, "dude_idle");
    player.setCollideWorldBounds(true);

    // Interface
    scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "24px",
      fill: "#000",
    });

    // Collisions
    this.physics.add.collider(platforms, player);

    // Animations
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude_run", {
        start: 0,
        end: 11,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("dude_idle", {
        start: 0,
        end: 10,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("dude_jump", {
        start: 0,
        end: 0,
      }),
    });
  },

  update() {
    move_player(player);
  },
};

function move_player(player) {
  // Left and Right
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.flipX = true;
    player.anims.play("left", true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.flipX = false;
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("idle", true);
  }

  // Jump
  if (cursors.up.isDown && player.body.touching.down) {
    console.log("up is pressed");
    player.setVelocityY(player_jump_velocity);
  }
}
