(function() {
  var aspectRatio, box1, box2, box3, box4, boxHeight, boxLength, boxWidth, camera, geometry, geometry2, height, light1, material, render, renderer, scene, width;

  scene = new THREE.Scene();

  aspectRatio = window.innerWidth / window.innerHeight;

  height = 1000;

  width = height * aspectRatio;

  camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, -500, 1000);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  renderer.setClearColor(0xFFFFFF, 1);

  document.body.appendChild(renderer.domElement);

  boxLength = 230;

  boxWidth = 60;

  boxHeight = 90;

  geometry = new THREE.BoxGeometry(boxLength, boxHeight, boxWidth);

  geometry2 = new THREE.BoxGeometry(boxLength + boxWidth, boxHeight, boxWidth);

  material = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF
  });

  box1 = new THREE.Mesh(geometry, material);

  box1.position.z = boxLength / 2;

  box2 = new THREE.Mesh(geometry2, material);

  box2.rotation.y = Math.PI / 2;

  box2.position.x = -boxLength / 2;

  box3 = new THREE.Mesh(geometry, material);

  box3.position.z = -boxLength / 2;

  box4 = new THREE.Mesh(geometry2, material);

  box4.rotation.y = Math.PI / 2;

  box4.position.x = boxLength / 2;

  scene.add(box1);

  scene.add(box2);

  scene.add(box3);

  scene.add(box4);

  light1 = new THREE.DirectionalLight(0xFFFFFF);

  light1.position.y = 1000;

  scene.add(light1);

  render = function() {
    var timer;
    requestAnimationFrame(render);
    timer = Date.now() * 0.0006;
    camera.position.y = 150;
    camera.position.x = Math.cos(timer) * 200;
    camera.position.z = Math.sin(timer) * 200;
    camera.lookAt(scene.position);
    return renderer.render(scene, camera);
  };

  render();

}).call(this);