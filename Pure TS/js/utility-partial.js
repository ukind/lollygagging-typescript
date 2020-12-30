// partial: make any properties of interface are optional
var updateStarship = function (id, starShip) { return ({
    name: starShip.name,
}); };
updateStarship(1, {
    enableHyperJump: true,
});
