import { Component, h } from 'preact'
import Fabric from 'preact-fabric'
import { fabric } from 'fabric'
import _ from 'lodash'

export default class FabricView extends Component {
  boundingRegion = null
  canvas = null
  canPan = false
  maps = ['./assets/bear-cave.png']
  tokens = ['./assets/rad-wizard.png']

  configureBounds () {
    // TODO configure bounding area
  }

  configureEvents () {
    // TODO constrain movement of objects to a set boundary region

    this.canvas.on('mouse:up', () => { this.canPan = false })

    this.canvas.on('mouse:down', () => { this.canPan = true })

    this.canvas.on('mouse:move', ({ e }) => {
      if (this.canPan && e && e.shiftKey) {
        this.doPan(e)
        e.preventDefault()
        e.stopPropagation()
      }
    })

    this.canvas.on('mouse:wheel', ({ e }) => {
      (e && e.shiftKey)
        ? this.doZoom(e)
        : this.doPan(e, true)

      e.preventDefault()
      e.stopPropagation()
    })

    window.addEventListener('resize', _.debounce(this.doResize.bind(this), 500, { leading: true }))
  }

  configureMap () {
    this.maps.forEach(map =>
      fabric.Image.fromURL(map, img =>
        this.canvas.add(img))
    )
  }

  configureTokens () {
    this.tokens.forEach(map =>
      fabric.Image.fromURL(map, img =>
        this.canvas.add(img))
    )
  }

  initializeFabric = (canvas) => {
    this.canvas = canvas

    this.doResize()
    this.configureBounds()
    this.configureEvents()
    this.configureMap()
    this.configureTokens()
  }

  doPan (e, isMouseWheel) {
    const moveX = (isMouseWheel) ? e.movementX * 10 : e.movementX
    const moveY = (isMouseWheel) ? e.movementY * 10 : e.movementY
    const delta = new fabric.Point(moveX, moveY)

    // TODO constrain panning to a set boundary region

    this.canvas.relativePan(delta)
  }

  doResize () {
    this.canvas.setWidth(window.innerWidth)
    this.canvas.setHeight(window.innerHeight)
  }

  doZoom (e) {
    const delta = -e.deltaY

    let zoom = this.canvas.getZoom() + (delta / 200)

    zoom = (zoom > 5)
      ? 5
      : (zoom < 0.5)
        ? 0.5
        : zoom

    this.canvas.setZoom(zoom)
  }

  render () {
    return (
      <Fabric
        config={{ isDrawingMode: false }}
        init={this.initializeFabric} />
    )
  }
}
