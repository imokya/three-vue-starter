import Experience from '../experience'
import * as THREE from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import { RoomEnvironment } from '../objects/RoomEnvironment'

export default class Environment {

  constructor() {
    this.experience = new Experience()
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer
    this.scene = this.experience.scene
    this.setLights()
    this.setEnvMap()
  }

  setEnvMap() {
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer.instance) 
    //const envRenderTarget = pmremGenerator.fromEquirectangular(this.resource.items.envMap)
    const envRenderTarget = pmremGenerator.fromScene(new RoomEnvironment())
    this.scene.environment = envRenderTarget.texture
  }

  setLights() {
    // const ambientLight = new THREE.AmbientLight(0xffffff, 2)
    // this.scene.add(ambientLight)
  }

}