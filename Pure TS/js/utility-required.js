// partial: make any properties of interface are optional
// only available in interface
var updateStarshipR = function (id, starShip) { return ({
    name: starShip.name,
    boost: starShip.enableHyperJump,
}); };
updateStarshipR(1, {
    name: 'Kzen',
    enableHyperJump: true,
});
