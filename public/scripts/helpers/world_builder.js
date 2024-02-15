function build_platforms(platforms) {
  build_platform_base(platforms, 28, 3, -6, 0);
  build_platform_long(platforms, 3, 400, -140);
  build_platform_long(platforms, 3, 100, -280);
  build_platform_long(platforms, 3, 400, -420);
  build_platform_long(platforms, 3, 100, -560);
}

function build_fans(fans) {
  build_fan_area(fans, 480, -168);
  build_fan_area(fans, 600, -28);
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
