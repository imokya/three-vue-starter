import * as THREE from 'three'

export default class Debug {
  constructor(scope) {

    const config = {
      car: {
        metalness: 0.8,
        roughness: 0.3,
        color: '#e8e8e8',
        envMapIntensity: 1.2,
        refractionRatio: 0.98
      },
      glass: {
        reflectivity: 1,
        metalness: 0.01,
        roughness: 0.2,
        envMapIntensity: 0.2,
        clearcoat: 0,
        clearcoatRoughness: 0,
        transmission: 1,
        sheen: 0,
        ior: 1.5
      },
      wheel: {
        roughness: 0.3,
        metalness: 0.2,
        envMapIntensity: 1
      }
    }
    const gui = scope.debug.ui
    

    const winFolder = gui.addFolder('glass') 
    winFolder.add(config.glass, 'metalness', 0, 1).onChange(value => {
      scope.debugGlass({
        metalness: value
      })
    })

    winFolder.add(config.glass, 'roughness', 0, 1).onChange(value => {
      scope.debugGlass({
        roughness: value
      })
    })

    winFolder.add(config.glass, 'envMapIntensity', 0, 10).onChange(value => {
      scope.debugGlass({
        envMapIntensity: value
      })
    })

    winFolder.add(config.glass, 'reflectivity', 0, 1).onChange(value => {
      scope.debugGlass({
        reflectivity: value
      })
    })

    winFolder.add(config.glass, 'clearcoat', 0, 1).onChange(value => {
      scope.debugGlass({
        clearcoat: value
      })
    })

    winFolder.add(config.glass, 'clearcoatRoughness', 0, 1).onChange(value => {
      scope.debugGlass({
        clearcoatRoughness: value
      })
    })

    winFolder.add(config.glass, 'transmission', 0, 10).onChange(value => {
      scope.debugGlass({
        transmission: value
      })
    })

    winFolder.add(config.glass, 'sheen', 0, 1).onChange(value => {
      scope.debugGlass({
        sheen: value
      })
    })

    winFolder.add(config.glass, 'ior', 0, 3).onChange(value => {
      scope.debugGlass({
        ior: value
      })
    })

    const carFolder = gui.addFolder('body')
    carFolder.add(config.car, 'metalness', 0, 1).onChange(value => {
      scope.debugMaterials([
        {
          name: 'body',
          metalness: value
        },
        {
          name: 'body.001',
          metalness: value
        },
        {
          name: 'body.003',
          metalness: value
        }
      ])
    })
    carFolder.add(config.car, 'roughness', 0, 1).onChange(value => {
      scope.debugMaterials([
        {
          name: 'body',
          roughness: value
        },
        {
          name: 'body.001',
          roughness: value
        },
        {
          name: 'body.003',
          roughness: value
        }
      ])
    })
    
    carFolder.addColor(config.car, 'color', 0, 1).onChange(value => {
      scope.debugMaterials([
        {
          name: 'body',
          color: new THREE.Color(value)
        },
        {
          name: 'body.001',
          color: new THREE.Color(value)
        },
        {
          name: 'body.003',
          color: new THREE.Color(value)
        }
      ])
    })

    carFolder.add(config.car, 'envMapIntensity', 0, 10).onChange(value => {
      scope.debugMaterials([
        {
          name: 'body',
          envMapIntensity: value
        },
        {
          name: 'body.001',
          envMapIntensity: value
        },
        {
          name: 'body.003',
          envMapIntensity: value
        }
      ])
    })

    const wheelFolder = gui.addFolder('轮毂')
    wheelFolder.add(config.wheel, 'roughness', 0, 1).onChange(value => {
      scope.debugMaterials([
        {
          name: 'wheel',
          roughness: value
        }
      ])
    })

    wheelFolder.add(config.wheel, 'metalness', 0, 1).onChange(value => {
      scope.debugMaterials([
        {
          name: 'wheel',
          metalness: value
        }
      ])
    })

    wheelFolder.add(config.wheel, 'envMapIntensity', 0, 10).onChange(value => {
      scope.debugMaterials([
        {
          name: 'wheel',
          envMapIntensity: value
        }
      ])
    })

  }
}