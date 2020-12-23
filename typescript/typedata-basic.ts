(function () {
  const isAdmin = true;
  const userName = "Yogiswara";
  let message: string;

  if (isAdmin) {
    console.log(`welcome! ${userName}`);
  } else {
    console.log("access denied");
  }
})();
