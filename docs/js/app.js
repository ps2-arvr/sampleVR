class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
		//ライトの色、光源の方向設定
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(0, 2, 0);
		scene.add( light );
		//
		var ambientLight = new THREE.AmbientLight(0xFFF888);
		scene.add( ambientLight );
		//
		this.meshCube = new THREE.Mesh();
		//オブジェクトを作成できる
		
		var geometryCube = new THREE.BoxGeometry(10,10,10);
		var materialCube = new THREE.MeshLambertMaterial( { color: 0xf6cece } );
		this.meshCube = new THREE.Mesh( geometryCube, materialCube );
		this.meshCube.position.set(10, 0, 50);
		this.scene.add( this.meshCube );
		this.meshCube.name='loadTorus'
		//
		
		//var geometryTorus = new THREE.TorusGeometry(10, 2,30, 20,1);
		//var materialTorus = new THREE.MeshLambertMaterial( { color: 0xf6cece } );
		//this.torusCube = new THREE.Mesh( geometryTorus, materialTorus );
		//this.torusCube.position.set(10, 0, 50);
		//this.scene.add( this.torusCube );
		
		
		
		
		
		var meshSphere = new THREE.Mesh();
		var loaderSphere = new THREE.TextureLoader();
		//バックグラウンドの画像指定
		var textureSphere = loaderSphere.load( './img/photo.jpg');

		var materialSphere = new THREE.MeshBasicMaterial({ map:textureSphere, side:THREE.BackSide });
		var geometrySphere = new THREE.SphereGeometry(1000,32,32);
		meshSphere = new THREE.Mesh( geometrySphere, materialSphere );
		meshSphere.position.set(0, 0, 0);
		//
		this.scene.add( meshSphere );
	}

	update(dt) {
		//アニメーション動作。連続で値を更新し続ける処理。
		//this.meshCube.rotation.x += dt * 1.1
		//this.meshCube.rotation.y += dt * 1.1
		//this.meshCube.rotation.z += dt * 0.8

		//this.meshCube.rotation.z += dt * 0.1

		
	}

	render(dt) {

	}
}
