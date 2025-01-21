function add_rectangle(scene, x, y, width, height, fillColor, alpha) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(fillColor, alpha);
  graphics.fillRect(x, y, width, height);
  return graphics;
}

function collect_fruit(_player, fruit) {
  fruit.disableBody(true, true);
}

function bounce_off(player, trampoline) {
  if (player.body.touching.down && player.body.y < trampoline.body.y) {
    player.body.velocity.y += 1.4 * player_jump_velocity;
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
      if (ay < 100) {
        player.body.velocity.y = -800;
      } else {
        player.body.velocity.y -= (200 - ay) / 4;
      }
    }
  });
}

function get_hit(player, _spike) {
  console.log("ouch");
  player.ishurting = true;
  player.damagedat = this.time.now;
  this.hurtsound.play();
}
