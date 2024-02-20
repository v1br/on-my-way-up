// Grouped functions

function build_platforms(platforms) {
  build_platform_floor(platforms, 28, 3, -6, 0);
  build_simple_platform(platforms, 3, 1, 448, -140);
  build_simple_platform(platforms, 3, 1, 168, -280);
  build_simple_platform(platforms, 3, 1, 448, -420);
  build_simple_platform(platforms, 3, 1, 168, -560);
  build_simple_platform(platforms, 2, 2, 216, -840);
  build_simple_platform(platforms, 2, 1, 360, -980);
  build_simple_platform(platforms, 2, 2, 504, -840);
  build_simple_platform(platforms, 4, 1, 312, -1120);
  build_simple_platform(platforms, 2, 1, 216, -1260);
  build_simple_platform(platforms, 4, 1, 0, -1400);
  build_simple_platform(platforms, 4, 3, 72, -1780);
  build_simple_platform(platforms, 1, 1, 360, -1780);
  build_simple_platform(platforms, 1, 1, 456, -1500);
  build_simple_platform(platforms, 1, 1, 552, -1780);
  build_simple_platform(platforms, 3, 3, 408, -2020);
}

function build_spikes(spikes) {
  // build_spike_row(spikes, 448, -108, (length = 7), (flip = true));
}

function build_fans(fans) {
  build_fan_area(fans, 24, -1428);
}

function build_trampolines(trampolines) {
  build_trampoline_area(trampolines, 170, -598);
  build_trampoline_area(trampolines, 530, -878);
  build_trampoline_area(trampolines, 458, -1538);
}

// Function to place a spike row
function build_spike_row(spikes, x, y, length = 1, flip = false) {
  if (flip) {
    for (let i = 0; i < length; i++) {
      spikes
        .create(x + i * 16, y, "spike")
        .setFlip(false, true)
        .setSize(16, 4)
        .setOffset(0, -3);
    }
  } else {
    for (let i = 0; i < length; i++) {
      spikes
        .create(x + i * 16, y, "spike")
        .setSize(16, 4)
        .setOffset(0, 12);
    }
  }
}

// Function to build a trampoline
function build_trampoline_area(trampolines, x, y) {
  trampolines.create(x, y, "trampoline_idle").setSize(12, 4).setOffset(8, 16);
}

// Function to build a fan
function build_fan_area(fans, x, y) {
  const fan = fans.create(x, y, "fan_on");
  fan.anims.play("fan_on");
}

// Function to build a platform
function build_simple_platform(platforms, length, depth, x, y) {
  if (depth < 1) {
    return;
  }

  // Block platform
  else if (depth === 1 && length === 1) {
    platforms.create(x, y, "grass").setFrame(3);
  }

  // Horizontal platform
  else if (depth === 1) {
    platforms.create(x, y, "grass").setFrame(0);
    for (let i = 1; i < length - 1; i++) {
      platforms.create(x + i * large_tile_width, y, "grass").setFrame(1);
    }
    platforms
      .create(x + (length - 1) * large_tile_width, y, "grass")
      .setFrame(2);
  }

  // Thick platform
  else {
    platforms.create(x, y, "grass").setFrame(4);
    for (let i = 1; i < length - 1; i++) {
      platforms.create(x + i * large_tile_width, y, "grass").setFrame(5);
    }
    platforms
      .create(x + (length - 1) * large_tile_width, y, "grass")
      .setFrame(6);

    for (j = 1; j < depth - 1; j++) {
      platforms.create(x, y + j * large_tile_height, "grass").setFrame(8);
      for (let i = 1; i < length - 1; i++) {
        platforms
          .create(x + i * large_tile_width, y + j * large_tile_height, "grass")
          .setFrame(9);
      }
      platforms
        .create(
          x + (length - 1) * large_tile_width,
          y + j * large_tile_height,
          "grass"
        )
        .setFrame(10);
    }

    platforms
      .create(x, y + (depth - 1) * large_tile_height, "grass")
      .setFrame(12);
    for (let i = 1; i < length - 1; i++) {
      platforms
        .create(
          x + i * large_tile_width,
          y + (depth - 1) * large_tile_height,
          "grass"
        )
        .setFrame(13);
    }
    platforms
      .create(
        x + (length - 1) * large_tile_width,
        y + (depth - 1) * large_tile_height,
        "grass"
      )
      .setFrame(14);
  }
}

// Function to build a thick platform as a base
function build_platform_floor(platforms, length, depth, x, y) {
  for (i = x + 1; i < x + length - 1; i++) {
    platforms
      .create(large_tile_width * i + large_tile_width / 2, y, "grass")
      .setFrame(5);
  }

  for (j = 1; j <= depth; j++) {
    for (i = x + 1; i < x + length - 1; i++) {
      platforms
        .create(
          large_tile_width * i + large_tile_width / 2,
          y + j * large_tile_height,
          "grass"
        )
        .setFrame(9);
    }
  }
}
