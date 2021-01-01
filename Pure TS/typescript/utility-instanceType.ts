// purpose create type from instance

// base class
class Car {
  constructor(public name: string) {}
}

// base class
class User {
  constructor(public name: string) {}
}

// create the instance with additonal attributes via args
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

// to clone class with additonal attributes
function cloneClass<T extends Constructable<{}>>(Base: T) {
  return class extends Base {
    deleted: boolean;

    delete = () => {};
  };
}

const deleteableCar = cloneClass(Car);
const deleteableUser = cloneClass(User);

type userInstance = InstanceType<typeof deleteableUser>;
type carInstance = InstanceType<typeof deleteableCar>;

class Profile {
  user: userInstance;

  car: carInstance;
}

const profile = new Profile();
profile.car = new deleteableCar('Yogi');
profile.user = new deleteableUser('Mazda');
