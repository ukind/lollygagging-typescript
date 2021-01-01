interface IStarship {
  name: string;
  enableHyperJump: boolean;
}

// partial: make any properties of interface are optional
// only available in interface
const updateStarship = (id: number, starShip: Partial<IStarship>): object => ({
  name: starShip.name,
});

updateStarship(1, {
  enableHyperJump: true,
});
