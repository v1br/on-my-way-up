// World data
const game_width = window.innerWidth > 320 ? 320 : window.innerWidth;
const game_height = window.innerHeight > 600 ? 600 : window.innerHeight;

const world_bounds_left = 0;
const world_bounds_up = 0;
const world_bounds_right = 640;
const world_bounds_down = 1200;

// Player data
const player_start_x = 320;
const player_start_y = -100;
const player_jump_velocity = -360;

// Terrain data
const large_tile_width = 48;
const large_tile_height = 48;
