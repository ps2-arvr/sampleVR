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

		//webCamera�̉f������荞��
		
		// �u���E�U�ԍ��ّΉ�
		navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
		// ���[�U�Ƀ��f�B�A�f�o�C�X�i�J�����A�}�C�N�Ȃǁj�̎g�p����q�˂�
		navigator.getUserMedia(
  		 // �J�������g�p���āA�}�C�N���g�p���Ȃ��ꍇ
  		 { video: true, audio: false },
 
   		// localMediaStream�i�J�����f���̃X�g���[���f�[�^���܂܂��j���擾�ł����ꍇ
   		function( localMediaStream ) {
   		   // ������localMediaStream���擾�ł����Ƃ��̏������L�q
   		},
   		// localMediaStream���擾�ł��Ȃ������ꍇ
  		 function( err ) {
  		    console.log( err );
  		 }
		);
		// �u���E�U�ԍ��ّΉ�
		window.URL = window.URL || window.webkitURL;
		// video�G�������g�쐬
		var video = document.createElement( 'video' );
		// URL�I�u�W�F�N�g���쐬���āAvideo�G�������g��src�ɐݒ�
		video.src = window.URL.createObjectURL( localMediaStream );
		// ����̍Đ�
		video.play();
		
		
		// video�G�������g�쐬
		//var video = document.createElement( 'video' );
		// �e�N�X�`���ɂ��铮��̎w��
		//video.src = './video/test.mp4';
		// ��������[�v�Đ�
		//video.loop = true;
		// ����̃��[�h���Đ�
		//video.load();
		//video.play();
		
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

		//this.meshCube.rotation.z += dt * 0.1

		
	}

	render(dt) {

	}
}
