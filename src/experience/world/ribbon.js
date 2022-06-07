import Experience from '../experience'
import * as THREE from 'three'

export default class Ribbon {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this._init()
  }

  _init() {
    const geometry = new THREE.PlaneGeometry(2, 2, 2, 2)
    const material = new THREE.MeshBasicMaterial({
      wireframe: true
    })
    const mesh = new THREE.Mesh(geometry, material)
    this.scene.add(mesh)
  }

  update() {}
}
