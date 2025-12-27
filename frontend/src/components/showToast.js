import React from 'react'
import { createRoot } from 'react-dom/client'
import Toast from './ToastComponent'

export function showToast(message, options = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)

  const close = () => {
    try {
      root.unmount()
    } catch {
      void 0
    }
    if (container.parentNode) container.parentNode.removeChild(container)
  }

  const props = {
    message,
    actions: options.actions || [],
    timeout: options.timeout ?? 5000,
    onClose: close
  }

  root.render(React.createElement(Toast, props))

  return close
}

export default showToast
