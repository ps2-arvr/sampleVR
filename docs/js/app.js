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
		
		
		navigator.mediaDevices = navigator.mediaDevices || ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
   		getUserMedia: function(c) {
   		  return new Promise(function(y, n) {
     		  (navigator.mozGetUserMedia ||
      		navigator.webkitGetUserMedia).call(navigator, c, y, n);
    		 });
   		}
		} : null);
		if ( !navigator.mediaDevices ) {
 		 alert( "getUserMedia() not supported." );
 		 return;
		}
		// Prefer camera resolution nearest to 1280x720.
		var constraints = { audio:false, video:true };
		navigator.mediaDevices.getUserMedia( constraints )
		.then( function( stream ) {
 		 var video = document.querySelector( 'video' );
 		 video.srcObject = stream
 		 video.onloadedmetadata = function(e) {
  		 video.play();
 		 };
		})
		.catch(function(err) {
 		 alert( err.name + ": " + err.message );
		});

		setInterval( function () {
                  if ( video.readyState >= video.HAVE_CURRENT_DATA ) {
                    texture.needsUpdate = true;
                  }
                 } ,1000 / 24 );



		var texture = new THREE.Texture( video );
                texture.generateMipmaps = false;
                texture.minFilter = THREE.NearestFilter;
                texture.maxFilter = THREE.NearestFilter;
                texture.format = THREE.RGBFormat;
		
		var meshSphere = new THREE.Mesh();
		var loaderSphere = new THREE.TextureLoader();
		//バックグラウンドの画像指定
		//var textureSphere = loaderSphere.load( './img/photo.jpg');
		var material = new THREE.MeshBasicMaterial( { map: texture } ) ;
		var geometrySphere = new THREE.SphereGeometry(1000,32,32);
		meshSphere = new THREE.Mesh( geometrySphere, material );
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
