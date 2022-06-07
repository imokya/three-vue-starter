import Experience from './experience'
import { Vector3, PerspectiveCamera } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class Camera {
  constructor() {
    this.experience = new Experience()
    this.size = this.experience.size
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.origin = new Vector3(0, 2, 12)
    this.capture = new Vector3(-8, 1, 12)
    this.setInstance()
    this.setOrbitControls()
  }

  setInstance() {
    this.instance = new PerspectiveCamera(
      30,
      this.size.width / this.size.height,
      0.1,
      1000
    )
    this.instance.position.copy(this.capture)
    this.instance.rotation.order = 'XYZ'
    this.scene.add(this.instance)
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enablePan = false
    this.controls.minDistance = 10
    this.controls.maxDistance = 17
    this.controls.minPolarAngle = Math.PI / 6
    this.controls.maxPolarAngle = Math.PI / 2.1
    this.controls.enableDamping = true
  }

  resize() {
    this.instance.aspect = this.size.width / this.size.height
    this.instance.updateProjectionMatrix()
  }

  update() {
    if (this.controls) {
      this.controls.update()
    }
  }
}
