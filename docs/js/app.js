class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
		//���C�g�̐F�A�����̕����ݒ�
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(0, 0, 0);
		scene.add( light );
		//
		var ambientLight = new THREE.AmbientLight(0xFFFFFF);
		scene.add( ambientLight );
		//
		this.meshCube = new THREE.Mesh();
		//�I�u�W�F�N�g���쐬�ł���
		
		var geometryCube = new THREE.BoxGeometry(10,10,10);
		var materialCube = new THREE.MeshLambertMaterial( { color: 0xf6cece } );
		this.meshCube = new THREE.Mesh( geometryCube, materialCube );
		this.meshCube.position.set(10, 0, 50);
		this.scene.add( this.meshCube );
		this.meshCube.name='loadTorus'
		
		
		var video = document.getElementById("video");
		// getUserMedia �ɂ��J�����f���̎擾
		var media = navigator.mediaDevices.getUserMedia({
 		   video: true,//�r�f�I���擾����
  		  //�g���J�������C���J�������w�ʃJ���������w�肷��ꍇ�ɂ�
   		 //video: { facingMode: "environment" },//�w�ʃJ����
   		 video: { facingMode: "user" },//�C���J����
    		audio: false,//�������K�v�ȏꍇ��ture
		
		});
		//���A���^�C���ɍĐ��i�X�g���[�~���O�j�����邽�߂Ƀr�f�I�^�O�ɗ�������
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
