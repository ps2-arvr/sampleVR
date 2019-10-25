class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
		//ライトの色、光源の方向設定
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(0, 0, 0);
		scene.add( light );
		//
		var ambientLight = new THREE.AmbientLight(0xFFFFFF);
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
		
		
		var video = document.getElementById("video");
		// getUserMedia によるカメラ映像の取得
		var media = navigator.mediaDevices.getUserMedia({
 		   video: true,//ビデオを取得する
  		  //使うカメラをインカメラか背面カメラかを指定する場合には
   		 //video: { facingMode: "environment" },//背面カメラ
   		 video: { facingMode: "user" },//インカメラ
    		audio: false,//音声が必要な場合はture
		
		});
		//リアルタイムに再生（ストリーミング）させるためにビデオタグに流し込む
		media.then((stream) => {
 		   video.srcObject = stream;
		});
		
		video.play();
		var texture = new THREE.Texture( video );
                texture.generateMipmaps = false;
                texture.minFilter = THREE.NearestFilter;
                texture.maxFilter = THREE.NearestFilter;
                texture.format = THREE.RGBFormat;
		
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
