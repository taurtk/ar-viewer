declare module 'three/examples/jsm/loaders/GLTFLoader' {
  import { Object3D, Scene } from 'three'

  export interface GLTF {
    scene: Scene
    scenes: Scene[]
    animations: any[]
    cameras: any[]
    asset: any
  }

  export class GLTFLoader {
    constructor()
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void
  }
}

declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera, EventDispatcher } from 'three'

  export class OrbitControls extends EventDispatcher {
    constructor(camera: Camera, domElement?: HTMLElement)
    enabled: boolean
    enableDamping: boolean
    dampingFactor: number
    update(): void
    dispose(): void
  }
} 