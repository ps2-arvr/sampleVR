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

		//webCameraの映像を取り込む
		
		// ブラウザ間差異対応
		navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
		// ユーザにメディアデバイス（カメラ、マイクなど）の使用をを尋ねる
		navigator.getUserMedia(
  		 // カメラを使用して、マイクを使用しない場合
  		 { video: true, audio: false },
 
   		// localMediaStream（カメラ映像のストリームデータが含まれる）が取得できた場合
   		function( localMediaStream ) {
   		   // ここにlocalMediaStreamを取得できたときの処理を記述
   		},
   		// localMediaStreamが取得できなかった場合
  		 function( err ) {
  		    console.log( err );
  		 }
		);
		// ブラウザ間差異対応
		window.URL = window.URL || window.webkitURL;
		// videoエレメント作成
		var video = document.createElement( 'video' );
		// URLオブジェクトを作成して、videoエレメントのsrcに設定
		video.src = window.URL.createObjectURL( localMediaStream );
		// 動画の再生
		video.play();
		
		
		// videoエレメント作成
		//var video = document.createElement( 'video' );
		// テクスチャにする動画の指定
		//video.src = './video/test.mp4';
		// 動画をループ再生
		//video.loop = true;
		// 動画のロード＆再生
		//video.load();
		//video.play();
		
		//videoテクスチャの作成
		var texture = new THREE.VideoTexture( video );
		texture.magFilter = THREE.LinearFilter;
		texture.minFilter = THREE.LinearFilter;
		texture.format = THREE.RGBFormat;
		
		//オブジェクトを作成する
		this.meshCube = new THREE.Mesh();
		var geometryCube = new THREE.BoxGeometry(30,30,30);
		var materialCube = new THREE.MeshBasicMaterial( { map: texture }  );
		this.meshCube = new THREE.Mesh( geometryCube, materialCube );
		this.meshCube.position.set(10, 0, 50);
		this.scene.add( this.meshCube );
		this.meshCube.name='loadTorus'


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
