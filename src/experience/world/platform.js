import Experience from '../experience'
import {
  Reflector
} from '../objects/Reflector'
import {
  Mesh,
  Color,
  CircleGeometry
} from 'three'

export default class Platform {

  constructor() {
    this.experience = new Experience()
    this.resource = this.experience.resource
    this.scene = this.experience.scene
    this.model = this.resource.items.platformModel
    this._loadModel()
    //this._createMirror()
  }

  set visible(toggle) {
    if (this.groundMirror) {
      this.groundMirror.visible = toggle
    }
    this.model.scene.visible = toggle
  }


  setMaterial(material) {
    this.model.scene.traverse(child => {
      if (child.isMesh) {
        if (child.material.name == material.name) {
          child.material.color = new Color(material.color).convertSRGBToLinear()
        }
      }
    })
  }

  _loadModel() {
    // const roughnessMap = this.resource.items.floorRoughnessMap
    // roughnessMap.wrapS = RepeatWrapping
    // roughnessMap.wrapT = RepeatWrapping
    // roughnessMap.repeat.set(1, 1)
    this.model.scene.traverse(child => {
      if (child instanceof Mesh) {
        if (child.material.name == 'platform') {
          child.material.color = new Color(0x000000)
          child.material.metalness = 1
          child.material.roughness = 0.2
          //child.material.roughnessMap = roughnessMap
          child.material.envMapIntensity = 0.4
        }
        if (child.material.name == 'strip') {
          child.material.metalness = 0.8
          child.material.roughness = 0.4
          child.material.color = new Color(0x999999)
        }
        if (child.material.name == 'face') {
          child.material.metalness = 1
          child.material.roughness = 0.6
          child.material.color = new Color(0x000000)
          child.material.envMapIntensity = 0.3
        }
        if (child.material.name == 'plastic') {
          child.material.metalness = 0.4
          child.material.roughness = 0.5
          child.material.color = new Color(0x000000)
          child.material.envMapIntensity = 0.6
        }
        if (child.material.name == 'rim') {
          child.material.metalness = 0.8
          child.material.roughness = 0.25
          child.material.color = new Color(0x000000)
          child.material.envMapIntensity = 0.6
        }
      }
    })
    this.model.scene.position.y = -0.685
    this.model.scene.scale.set(1.2, 1, 1.2)
    this.scene.add(this.model.scene)
  }

  _createMirror() {
    const geometry = new CircleGeometry(1.65, 64)
    const groundMirror = new Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: 0x111111
    })
    groundMirror.position.y = 0.02
    groundMirror.rotateX(-Math.PI / 2)
    this.model.scene.add(groundMirror)
    this.groundMirror = groundMirror
  }

}