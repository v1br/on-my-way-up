function build_platforms(platforms) {
  build_platform_base(platforms, 28, 3, -6, 0);
  build_platform_long(platforms, 3, 448, -140);
  build_platform_long(platforms, 3, 168, -280);
  build_platform_long(platforms, 3, 448, -420);
  build_platform_long(platforms, 3, 168, -560);
  build_platform_long(platforms, 2, 216, -840);
  build_platform_long(platforms, 2, 360, -980);
  build_platform_long(platforms, 2, 504, -840);
  build_platform_long(platforms, 4, 312, -1120);
  build_platform_long(platforms, 2, 216, -1260);
  build_platform_long(platforms, 4, 0, -1400);

  build_platform_long(platforms, 3, 72, -1780);
}

function build_fans(fans) {
  build_fan_area(fans, 24, -1428);
}

function build_trampolines(trampolines) {
  build_trampoline_area(trampolines, 170, -598);
  build_trampoline_area(trampolines, 530, -878);
}

// Function to build a trampoline
function build_trampoline_area(trampolines, x, y) {
  trampolines.create(x, y, "trampoline_idle");
}

// Function to build a fan
function build_fan_area(fans, x, y) {
  const fan = fans.create(x, y, "fan_on");
  fan.anims.play("fan_on");
}

// Function to build a long platform
function build_platform_long(platforms, length, x, y) {
  platforms.create(x, y, "grass_left");
  for (i = 1; i < length - 1; i++) {
    platforms.create(x + i * large_tile_width, y, "grass_top");
  }
  platforms.create(x + (length - 1) * large_tile_width, y, "grass_right");
}

// Function to build a thick platform as a base
function build_platform_base(platforms, length, depth, x, y) {
  for (i = x + 1; i < x + length - 1; i++) {
    platforms.create(
      large_tile_width * i + large_tile_width / 2,
      y,
      "grass_fill_top"
    );
  }

  for (j = 1; j <= depth; j++) {
    for (i = x + 1; i < x + length - 1; i++) {
      platforms.create(
        large_tile_width * i + large_tile_width / 2,
        y + j * large_tile_height,
        "grass_fill"
      );
    }
  }
}
