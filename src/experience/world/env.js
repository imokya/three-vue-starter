import Experience from '../experience'
import * as THREE from 'three'

export default class Env {

  constructor() {
    this.experience = new Experience()
    this.resource = this.experience.resource
    this.scene = this.experience.scene
    this.loadModel()
  }

  set visible(toggle) {
    this.model.visible = toggle
  }

  loadModel() {
    const model = this.resource.items.envModel
    const texture = this.resource.items.envTexture
    texture.encoding = THREE.sRGBEncoding
    texture.flipY = false
    
    model.scene.traverse(child => {
      if(child instanceof THREE.Mesh) {
        child.material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.BackSide
        })
      }
    })
    model.scene.position.y = -0.7
    model.scene.rotation.y = 1.6
    this.scene.add(model.scene)
    this.model = model.scene
  }

}