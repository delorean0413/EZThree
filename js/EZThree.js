var Camera = (function() {
  function Camera () {
    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 50;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  
  Camera.prototype.move_up = function ( distance ) {
    this.camera.position.z += distance;
  }
  return Camera;
}) ();


var Scene = (function() {
  function Scene () {
    this.scene = new THREE.Scene();
  }
  return Scene;
})();


var Renderer = (function() {
  function Renderer () {
    this.renderer = new THREE.CSS3DStereoRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  return Renderer;
})();

var EZThree = (function() {
  function EZThree () {
    this.camera = new Camera();
    this.scene = new Scene();
    this.renderer = new Renderer();
    window.addEventListener("resize", this.onWindowResize, false);
    console.log("EZThree is ready to go");
  }

  EZThree.prototype.render = function () {
    this.renderer.render(this.scene, this.camera);
  }

  EZThree.prototype.onWindowResize = function () {
    console.dir(EZThree.camera);
    this.camera.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }

  //add box for test
  EZThree.prototype.addBox = function () {
    this.geometry = new THREE.BoxGeometry(10, 10, 10);
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff0});
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
  }

  return EZThree;
})();
