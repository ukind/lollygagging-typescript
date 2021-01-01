interface IHewan {
  berjalan(): void;
}

interface IBurung {
  terbang(): string;
}

const myObj: IHewan & ThisType<IBurung> = {
  berjalan() {
    // dengan menggunakan ThisType, bisa melakukan binding berdasarkan interface
    return this.terbang();
  },
};

myObj.berjalan = myObj.berjalan.bind({
  terbang() {
    return 'Hello World';
  },
});

myObj.berjalan(); // Hello world
