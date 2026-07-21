import { useEffect, useRef } from 'react'

// Draws a single stylised petal (two bezier lobes meeting at a point) rather
// than a generic circle/rect particle — cheap to render, reads as a petal
// even at 8-14px.
function drawPetal(ctx, size) {
  ctx.beginPath()
  ctx.moveTo(0, -size)
  ctx.bezierCurveTo(size * 0.9, -size * 0.6, size * 0.75, size * 0.5, 0, size)
  ctx.bezierCurveTo(-size * 0.75, size * 0.5, -size * 0.9, -size * 0.6, 0, -size)
  ctx.closePath()
}

export default function SakuraCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const COUNT = reduced ? 0 : Math.min(56, Math.round((width * height) / 26000))

    const petals = Array.from({ length: COUNT }, () => spawn(true))

    function spawn(initial) {
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -20,
        size: 5 + Math.random() * 7,
        fall: 0.35 + Math.random() * 0.55,
        swayAmp: 20 + Math.random() * 40,
        swayFreq: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        hueShift: Math.random(),
        opacity: 0.35 + Math.random() * 0.45,
      }
    }

    let t = 0
    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, width, height)

      for (const p of petals) {
        p.y += p.fall
        p.rot += p.rotSpeed
        const sway = Math.sin(t * 0.016 * p.swayFreq + p.phase) * (p.swayAmp * 0.02)
        p.x += sway

        // gentle repulsion from the cursor
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.hypot(dx, dy)
        const radius = 110
        if (dist < radius) {
          const force = (1 - dist / radius) * 2.2
          p.x += (dx / (dist || 1)) * force
          p.y += (dy / (dist || 1)) * force * 0.4
        }

        if (p.y > height + 20) {
          Object.assign(p, spawn(false), { x: Math.random() * width })
        }
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.hueShift > 0.5 ? 'rgba(255,183,197,OPA)' : 'rgba(255,145,168,OPA)'
        ctx.fillStyle = ctx.fillStyle.replace('OPA', p.opacity.toFixed(2))
        drawPetal(ctx, p.size)
        ctx.fill()
        ctx.restore()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const onResize = () => resize()

    if (!reduced) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      rafRef.current = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}
