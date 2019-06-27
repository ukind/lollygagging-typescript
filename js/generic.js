"use strict";
(function () {
    //   function pickNumber(number: number[]): number {
    //     const randomIndex = Math.floor(Math.random() * number.length);
    //     return number[randomIndex];
    //   }
    //   const number = [...Array(13).keys()];
    //   const pickedNumber = pickNumber(number);
    //   console.log(pickedNumber);
    //   function pickSuit(suits: string[]): string {
    //     const randomIndex = Math.floor(Math.random() * suits.length);
    //     return suits[randomIndex];
    //   }
    //   const suits = ["diamonds", "clubs", "hearts", "spades"];
    //   const picketSuit = pickSuit(suits);
    //   console.log(picketSuit);
    //   implementation on generic function: add T for the facto
    function picker(args) {
        const randomIndex = Math.floor(Math.random() * args.length);
        return args[randomIndex];
    }
    const suits = ["diamonds", "clubs", "hearts", "spades"];
    const numbers = [...Array(13).keys()];
    const pickedNumber = picker(numbers);
    const pickedSuit = picker(suits);
    console.log(`Your card is: ${pickedNumber} ${pickedSuit}`);
})();
