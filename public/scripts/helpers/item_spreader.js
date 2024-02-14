function spread_fruits(fruits, fruit_type) {
  for (i = 0; i <= 3; i++) {
    const item = fruits.create(396 + 40 * i, -180, fruit_type);
    item.anims.play(fruit_type, true);
  }
}

function collect_fruit(player, fruit) {
  fruit.disableBody(true, true);
}
