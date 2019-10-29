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

		//webCameraの接続確認
		//navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		//var URL = window.URL || window.webkitURL;
		//接続用のwindow.RTCPeerConnectionを生成、ビデオの通信をする際に必要
		//var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
		//var RTCSessionDescription = window.RTCSessionDescription || window.webkitRTCSessionDescription || window.mozRTCSessionDescription;
		//ICE Candidate: 通信経路の情報
		//var RTCIceCandidate = window.RTCIceCandidate || window.webkitRTCIceCandidate || window.mozRTCIceCandidate;

		// フロント（イン）カメラの場合	
		//const medias = {audio : false, video : { facingMode: "user" }},
 		

		// リア（バック/アウト）カメラの場合
		/* const medias = {audio : false, video : { facingMode: { exact: "environment" } }},
 		     video  = document.getElementById("video"); */
		
		//navigator.getUserMedia(medias, successCallback, errorCallback);
		//video  = document.getElementById("video");	
		video.play();
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
	}

	render(dt) {

	}

}
//function successCallback(stream) {
		  //video.srcObject = stream;
		//video.src = window.URL.createObjectURL( stream );
		// 動画の再生
		//peer.addStream(stream)
		//video.play();
		//}

//function errorCallback(error) {
		  //alert(error);
		//}
