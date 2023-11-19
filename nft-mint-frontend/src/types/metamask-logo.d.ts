declare module '@metamask/logo' {
  interface ModelViewerConfig {
    pxNotRatio: boolean
    width: number
    height: number
    followMouse?: boolean
    slowDrift?: boolean
  }

  interface Viewer {
    container: HTMLElement
    lookAt: (coords: { x: number; y: number }) => void
    setFollowMouse: (follow: boolean) => void
    stopAnimation: () => void
  }

  export default function ModelViewer(config: ModelViewerConfig): Viewer
}
