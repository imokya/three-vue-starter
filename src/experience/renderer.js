import Experience from './experience'
import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping, PCFSoftShadowMap } from 'three'
import util from './utils'

export default class Renderer {

  constructor() {
    this.experience = new Experience()
    this.size = this.experience.size
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    
    this.setInstance()
  }

  setInstance() {
    const anti = util.isBugIOSVersion() ? false : true
    this.instance = new WebGLRenderer({
      canvas: this.canvas,
      antialias: anti,
      alpha: false
    })
    this.instance.physicallyCorrectLights = false
    this.instance.outputEncoding = sRGBEncoding
    this.instance.toneMapping = ACESFilmicToneMapping
    this.instance.toneMappingExposure = 1.5
    this.instance.shadowMap.enabled = false
    this.instance.shadowMap.type = PCFSoftShadowMap
    this.instance.setPixelRatio(this.size.pixelRatio)
    this.instance.setSize(this.size.width, this.size.height)
  
  }

  resize() {
    this.instance.setSize(this.size.width, this.size.height)
    this.instance.setPixelRatio(Math.min(this.size.pixelRatio, 2))
  }

  update() {
    this.instance.render(this.scene, this.camera.instance)
  }

}



