var camera, renderer;
var effect, controls;
var element, container;

var clock = new THREE.Clock();
var scene = new THREE.Scene();
var app = new App(scene);

var torusWidth = 1.0;

var raycaster,scopedObj;
var cursor= new THREE.Vector2(0,0);


init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer();
	element = renderer.domElement;
	container = document.getElementById('example');
	container.appendChild(element);

	effect = new THREE.StereoEffect(renderer);
	//THREE.Raycaster
	raycaster = new THREE.Raycaster();
	this.width = 100.0;

	camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 10000 );
	camera.position.set(0, 0, 0);
	scene.add(camera);

	controls = new THREE.OrbitControls(camera, element);
	controls.target.set(
		camera.position.x,
		camera.position.y,
		camera.position.z+0.1
	);
	controls.noZoom = true;
	controls.noPan = true;

	function setOrientationControls(e) {
		if (!e.alpha) {
			return;
		}

		controls = new THREE.DeviceOrientationControls(camera, true);
		controls.connect();
		controls.update();

		element.addEventListener('click', fullscreen, false);

		window.removeEventListener('deviceorientation', setOrientationControls, true);
	}
	window.addEventListener('deviceorientation', setOrientationControls, true);
	window.addEventListener('resize', resize, false);
	setTimeout(resize, 1);
	app.init();
}

var width = 0;
var height = 0;

function resize() {
	width = container.offsetWidth;
	height = container.offsetHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize(width, height);

	effect.setSize(width, height);
}

function update(dt) {
	resize();

	camera.updateProjectionMatrix();

	controls.update(dt);
	app.update(dt);
		
}
	var len = 0;
function render(dt) {
	raycaster.setFromCamera( cursor, camera );
	var intersects = raycaster.intersectObjects(scene.children, true);
	if ( intersects.length > 1 ) {
		for(var i=0; i < intersects.length; i++){
			if ( intersects[i].object.name == 'loadTorus') {
			//オブジェクトが中央に来たとき、キューブのパラメータを変化させる
			//torusCube.rotation.y += 0.5;
			//app.meshCube.rotation.x +=  0.1
			//(function loop() {
  			len +=0.05;
  			var geometryTorus = new THREE.TorusGeometry(10, 2,30, 20,len);
			var materialTorus = new THREE.MeshLambertMaterial( { color: 0xf6cece } );
			this.torusCube = new THREE.Mesh( geometryTorus, materialTorus );
			this.torusCube.position.set(10, 0, 50);
			this.scene.add( this.torusCube );
    			//if (len<2) {setInterval(loop,100000);}
			//})();
			//app.meshCube.rotation.x +=  0.1
			//scene.remove( this.torusCube );
			}
		//app.meshCube.rotation.x +=  0.1
		}
	
	
	}else if ( intersects.length > 0 ){
	app.meshCube.rotation.x +=  0.1
	}
	
	app.render(dt);
	effect.render(scene, camera);
}

function animate(t) {
	requestAnimationFrame(animate);

	update(clock.getDelta());
	render(clock.getDelta());
}

function fullscreen() {
	if (container.requestFullscreen) {
		container.requestFullscreen();
	} else if (container.msRequestFullscreen) {
		container.msRequestFullscreen();
	} else if (container.mozRequestFullScreen) {
		container.mozRequestFullScreen();
	} else if (container.webkitRequestFullscreen) {
		container.webkitRequestFullscreen();
	}
}
