interface IStarshipR {
  name?: string;
  enableHyperJump?: boolean;
}

// partial: make any properties of interface are optional
// only available in interface
const updateStarshipR = (
  id: number,
  starShip: Required<IStarshipR>,
): object => ({
  name: starShip.name,
  boost: starShip.enableHyperJump,
});

updateStarshipR(1, {
  name: 'Kzen',
  enableHyperJump: true,
});
