import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  CubeTexture,
  GizmoManager,
  Texture,
} from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(10, 10, -12), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  camera.speed = 0.25;

  new HemisphericLight("light", Vector3.Up(), scene);
  const envTexture = new CubeTexture(
    "https://assets.babylonjs.com/environments/environmentSpecular.env",

    scene
  );
  scene.createDefaultSkybox(envTexture, true, 10000);

  const platform = MeshBuilder.CreateBox(
    "box",
    {
      width: 10,
      height: 0,
      depth: 10
    },
    scene
  );
  const BoxMaterial = new StandardMaterial("material", scene);
  BoxMaterial.emissiveTexture = new Texture(
    "https://www.babylonjs-playground.com/textures/fire.png"
  );
  platform.material = BoxMaterial;
  platform.receiveShadows = true;


  const ball = MeshBuilder.CreateSphere("ball", { diameter: 1 }, scene);
  ball.position.y = 4;
  const BallMaterial = new StandardMaterial("material", scene);
  ball.material = BallMaterial
  BallMaterial.emissiveTexture = new Texture("https://www.babylonjs-playground.com/textures/sphereMap.png");



  engine.runRenderLoop(() => {
    scene.render();
  });

  const gizmoManager = new GizmoManager(scene);

  const PositionBtn = document.querySelector("#positionBtn");
  PositionBtn.addEventListener("click", () => {
    gizmoManager.positionGizmoEnabled = !gizmoManager.positionGizmoEnabled;
    if (gizmoManager.positionGizmoEnabled) {
      PositionBtn.classList.add("bg-red");
      rotateBtn.classList.remove("bg-red");
      scaleBtn.classList.remove("bg-red");
      boundBtn.classList.remove("bg-red");
      cursorBtn.classList.remove("bg-red");
      gizmoManager.rotationGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
      gizmoManager.boundingBoxGizmoEnabled = false;
    } else {
      PositionBtn.classList.remove("bg-red");
    }
  });
  const rotateBtn = document.querySelector("#rotateBtn");
  rotateBtn.addEventListener("click", () => {
    gizmoManager.rotationGizmoEnabled = !gizmoManager.rotationGizmoEnabled;
    if (gizmoManager.rotationGizmoEnabled) {
      rotateBtn.classList.add("bg-red");
      scaleBtn.classList.remove("bg-red");
      boundBtn.classList.remove("bg-red");
      PositionBtn.classList.remove("bg-red");
      cursorBtn.classList.remove("bg-red");
      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
      gizmoManager.boundingBoxGizmoEnabled = false;
    } else {
      rotateBtn.classList.remove("bg-red");
    }
  });
  const scaleBtn = document.querySelector("#scaleBtn");
  scaleBtn.addEventListener("click", () => {
    gizmoManager.scaleGizmoEnabled = !gizmoManager.scaleGizmoEnabled;
    if (gizmoManager.scaleGizmoEnabled) {
      scaleBtn.classList.add("bg-red");
      boundBtn.classList.remove("bg-red");
      rotateBtn.classList.remove("bg-red");
      PositionBtn.classList.remove("bg-red");
      cursorBtn.classList.remove("bg-red");

      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.boundingBoxGizmoEnabled = false;
      gizmoManager.rotationGizmoEnabled = false;
    } else {
      scaleBtn.classList.remove("bg-red");
    }
  });
};

export { createScene };
