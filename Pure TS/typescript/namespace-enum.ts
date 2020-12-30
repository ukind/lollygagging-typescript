enum vegetables {
  Tomato = 'tomato',
  Onion = 'onion',
}

namespace NVegetables {
  export function makeSalad() {
    return vegetables.Onion + vegetables.Tomato;
  }
}

const salad = NVegetables.makeSalad();
// [LOG]: "oniontomato" 
