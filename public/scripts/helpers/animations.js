function animate_scene(anims) {
  anims.create({
    key: "strawberry",
    frames: anims.generateFrameNumbers("strawberry", {
      start: 0,
      end: 16,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "melon",
    frames: anims.generateFrameNumbers("melon", {
      start: 0,
      end: 16,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "pineapple",
    frames: anims.generateFrameNumbers("pineapple", {
      start: 0,
      end: 16,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "saw_on",
    frames: anims.generateFrameNumbers("saw_on", {
      start: 0,
      end: 7,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "mover_on",
    frames: anims.generateFrameNumbers("mover_on", {
      start: 0,
      end: 3,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "trampoline_idle",
    frames: anims.generateFrameNumbers("trampoline_idle", {
      start: 0,
      end: 0,
    }),
  });

  anims.create({
    key: "trampoline_jump",
    frames: anims.generateFrameNumbers("trampoline_jump", {
      start: 0,
      end: 7,
    }),
  });

  anims.create({
    key: "fan_off",
    frames: anims.generateFrameNumbers("fan_off", {
      start: 0,
      end: 0,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "fan_on",
    frames: anims.generateFrameNumbers("fan_on", {
      start: 0,
      end: 3,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "left",
    frames: anims.generateFrameNumbers("frog_run", {
      start: 0,
      end: 11,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "right",
    frames: anims.generateFrameNumbers("frog_run", {
      start: 0,
      end: 11,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "idle",
    frames: anims.generateFrameNumbers("frog_idle", {
      start: 0,
      end: 10,
    }),
    frameRate: 24,
    repeat: -1,
  });

  anims.create({
    key: "jump",
    frames: anims.generateFrameNumbers("frog_jump", {
      start: 0,
      end: 0,
    }),
  });

  anims.create({
    key: "fall",
    frames: anims.generateFrameNumbers("frog_fall", {
      start: 0,
      end: 0,
    }),
  });

  anims.create({
    key: "hit",
    frames: anims.generateFrameNumbers("frog_hit", {
      start: 0,
      end: 6,
    }),
    frameRate: 24,
  });
}
