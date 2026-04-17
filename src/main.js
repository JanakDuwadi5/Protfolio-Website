import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import profileImage from './assets/JanakProfile.jpeg'

const setFavicon = (href) => {
  let link = document.querySelector("link[rel~='icon']")

  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }

  link.href = href
}

const createProfileFavicon = () =>
  new Promise((resolve) => {
    const size = 64
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      resolve('/favicon.svg')
      return
    }

    const image = new Image()
    image.crossOrigin = 'anonymous'

    image.onload = () => {
      const radius = 16
      const gradient = ctx.createLinearGradient(0, 0, size, size)
      gradient.addColorStop(0, '#111827')
      gradient.addColorStop(1, '#4f46e5')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(radius, 0)
      ctx.arcTo(size, 0, size, size, radius)
      ctx.arcTo(size, size, 0, size, radius)
      ctx.arcTo(0, size, 0, 0, radius)
      ctx.arcTo(0, 0, size, 0, radius)
      ctx.closePath()
      ctx.fill()

      const inset = 6
      const avatarSize = size - inset * 2
      const center = size / 2

      ctx.save()
      ctx.beginPath()
      ctx.arc(center, center, avatarSize / 2, 0, Math.PI * 2)
      ctx.clip()

      const scale = Math.max(avatarSize / image.width, avatarSize / image.height)
      const drawWidth = image.width * scale
      const drawHeight = image.height * scale
      const drawX = (size - drawWidth) / 2
      const drawY = (size - drawHeight) / 2

      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight)
      ctx.restore()

      const sheen = ctx.createRadialGradient(
        size * 0.28,
        size * 0.22,
        0,
        size * 0.28,
        size * 0.22,
        size * 0.78,
      )
      sheen.addColorStop(0, 'rgba(255,255,255,0.28)')
      sheen.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = sheen
      ctx.fillRect(0, 0, size, size)

      ctx.lineWidth = 2.5
      ctx.strokeStyle = 'rgba(255,255,255,0.95)'
      ctx.beginPath()
      ctx.arc(center, center, avatarSize / 2, 0, Math.PI * 2)
      ctx.stroke()

      resolve(canvas.toDataURL('image/png'))
    }

    image.onerror = () => resolve('/favicon.svg')
    image.src = profileImage
  })

const themeKey = 'theme'
const savedTheme = localStorage.getItem(themeKey)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark

createProfileFavicon().then(setFavicon)

document.documentElement.classList.toggle('dark', initialDark)
document.body.classList.toggle('dark', initialDark)

createApp(App).mount('#app')
