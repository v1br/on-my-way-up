function animate_fruits(anims) {
  anims.create({
    key: "strawberry",
    frames: anims.generateFrameNumbers("strawberry", {
      start: 0,
      end: 16,
    }),
    frameRate: 24,
    repeat: -1,
  });
}

function animate_trampolines(anims) {
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
}

function animate_fans(anims) {
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
}

function animate_player(anims) {
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
}
