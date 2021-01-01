var myObj = {
    berjalan: function () {
        // dengan menggunakan ThisType, bisa melakukan binding berdasarkan interface
        return this.terbang();
    },
};
myObj.berjalan = myObj.berjalan.bind({
    terbang: function () {
        return 'Hello World';
    },
});
myObj.berjalan(); // Hello world
