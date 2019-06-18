(function() {
  const isAdmin: boolean = true;
  const userName: string = "Yogiswara";
  let message: string;

  if (isAdmin) {
    console.log(`welcome! ${userName}`);
  } else {
    console.log("access denied");
  }
})();
