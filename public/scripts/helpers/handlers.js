function add_rectangle(scene, x, y, width, height, fillColor, alpha) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(fillColor, alpha);
  graphics.fillRect(x, y, width, height);
  return graphics;
}

function collect_fruit(player, fruit) {
  fruit.disableBody(true, true);
}

function bounce_off(player, trampoline) {
  if (
    player.body.touching.down &&
    player.body.y < trampoline.body.y &&
    Math.abs(player.body.x - trampoline.body.x) <= 24
  ) {
    if (!player_on_bounce) {
      player.body.y -= 6;
      player_on_bounce = true;
    }
    player.body.velocity.y += 1.3 * player_jump_velocity;
    trampoline.anims.play("trampoline_jump");
  }
}

function detect_fan(player, fans) {
  fans.getChildren().forEach((fan) => {
    const ax = Math.abs(player.body.x - fan.x);
    const ay = Math.abs(player.body.y - fan.y);

    const c1 = ax < 24;
    const c2 = fan.y > player.body.y;
    const c3 = ay < 200;

    if (c1 && c2 && c3) {
      console.log("fan detected!");
      console.log(player.body.velocity.y);

      if (ay < 100) {
        player.body.velocity.y = -400;
      } else {
        player.body.velocity.y -= (200 - ay) / 4;
      }
    }
  });
}
