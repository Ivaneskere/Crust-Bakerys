import React from 'react'

const TOAST_STYLES = {
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  zIndex: 9999,
  minWidth: '320px',
  maxWidth: '420px',
  boxShadow: '0 6px 18px rgba(0,0,0,.12)',
  borderRadius: '12px',
  overflow: 'hidden',
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial'
}

function Toast({ message, actions = [], onClose, timeout = 5000 }) {
  React.useEffect(() => {
    if (timeout > 0) {
      const t = setTimeout(() => onClose(), timeout)
      return () => clearTimeout(t)
    }
  }, [onClose, timeout])

  return (
    <div style={TOAST_STYLES} className="bg-white">
      <div style={{ padding: '12px 16px', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ fontSize: 14, color: '#0f172a', fontWeight: 600 }}>{message}</div>
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 12, justifyContent: 'flex-end' }}>
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={() => { a.onClick && a.onClick(); onClose() }}
            style={{
              background: i === 0 ? '#7b4a2a' : '#f3f4f6',
              color: i === 0 ? '#fff' : '#111827',
              padding: '8px 12px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Toast
