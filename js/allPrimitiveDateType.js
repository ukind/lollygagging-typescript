(function () {
    const isAdmin = true;
    const userName = "Yogiswara";
    let message;
    if (isAdmin) {
        console.log(`welcome! ${userName}`);
    }
    else {
        console.log("access denied");
    }
})();
