import Experience from '../experience'
import * as THREE from 'three'
import Environment from './environment'


export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resource = this.experience.resource
    this.renderer = this.experience.renderer.instance
    
    this.resource.on('ready', () => {
      
      this.environment = new Environment()      
    
    }) 
  }
  
  update() {
  }
}