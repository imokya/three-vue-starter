import Experience from '../experience'
import Environment from './environment'
import Ribbon from './ribbon'

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer.instance

    this.resource.on('ready', () => {
      this.ribbon = new Ribbon()
      this.environment = new Environment()
    })
  }

  update() {
    if (this.ribbon && this.ribbon.update) {
      this.ribbon.update()
    }
  }
}
