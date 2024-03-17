try {
  function a() {
    var b = 10;
    c();
    function c() {}
  }

  a();
  console.log(b);
} catch (err) {
  console.log(err.message);
  console.log(err.name);
}
