class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
		//���C�g�̐F�A�����̕����ݒ�
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(0, 2, 0);
		scene.add( light );
		//
		var ambientLight = new THREE.AmbientLight(0xFFF888);
		scene.add( ambientLight );

		//webCamera�̐ڑ��m�F
		//navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		//var URL = window.URL || window.webkitURL;
		//�ڑ��p��window.RTCPeerConnection�𐶐��A�r�f�I�̒ʐM������ۂɕK�v
		//var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
		//var RTCSessionDescription = window.RTCSessionDescription || window.webkitRTCSessionDescription || window.mozRTCSessionDescription;
		//ICE Candidate: �ʐM�o�H�̏��
		//var RTCIceCandidate = window.RTCIceCandidate || window.webkitRTCIceCandidate || window.mozRTCIceCandidate;

		// �t�����g�i�C���j�J�����̏ꍇ	
		//const medias = {audio : false, video : { facingMode: "user" }},
 		

		// ���A�i�o�b�N/�A�E�g�j�J�����̏ꍇ
		/* const medias = {audio : false, video : { facingMode: { exact: "environment" } }},
 		     video  = document.getElementById("video"); */
		
		//navigator.getUserMedia(medias, successCallback, errorCallback);
		//video  = document.getElementById("video");	
		video.play();
		//video�e�N�X�`���̍쐬
		var texture = new THREE.VideoTexture( video );
		texture.magFilter = THREE.LinearFilter;
		texture.minFilter = THREE.LinearFilter;
		texture.format = THREE.RGBFormat;
		
		//�I�u�W�F�N�g���쐬����
		this.meshCube = new THREE.Mesh();
		var geometryCube = new THREE.BoxGeometry(30,30,30);
		var materialCube = new THREE.MeshBasicMaterial( { map: texture }  );
		this.meshCube = new THREE.Mesh( geometryCube, materialCube );
		this.meshCube.position.set(10, 0, 50);
		this.scene.add( this.meshCube );
		this.meshCube.name='loadTorus'


		var meshSphere = new THREE.Mesh();
		var loaderSphere = new THREE.TextureLoader();
		//�o�b�N�O���E���h�̉摜�w��
		var textureSphere = loaderSphere.load( './img/photo.jpg');
		var materialSphere = new THREE.MeshBasicMaterial({ map:textureSphere, side:THREE.BackSide });
		var geometrySphere = new THREE.SphereGeometry(1000,32,32);
		meshSphere = new THREE.Mesh( geometrySphere, materialSphere );
		meshSphere.position.set(0, 0, 0);
		//
		this.scene.add( meshSphere );
	}

	update(dt) {
		//�A�j���[�V��������B�A���Œl���X�V�������鏈���B
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
		// ����̍Đ�
		//peer.addStream(stream)
		//video.play();
		//}

//function errorCallback(error) {
		  //alert(error);
		//}
