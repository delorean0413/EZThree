var Camera = (function() {
  var Camera = function() {
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 3000;
  }
  var This = Camera.prototype;

  This.up = function (distance) {
    this.camera.postion.z += distance;
  }

}) ();


var Scene = (function() {
  var Scene = function() {
    this.scene = new THREE.Scene();
  }

})();


var Renderer = (function() {
  var Renderer = function() {
    this.renderer = new THREE.CSS3DStereoRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.position = "absolute";
    document.getElementById("container").appendChild(this.renderer.domElement);
  }
})();

var EZThree = (function() {
  var EZThree = function() {
    this.camera = new Camera;
    this.scene = new Scene();
    this.renderer = new Renderer();

    window.addEventListener("resize", onWindowResize, false);
  }

  var This = EZThree.prototype;

  This.onWindowResize = function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }
  return EZThree;
})();
