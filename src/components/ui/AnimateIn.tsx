import { useRef, useEffect, useState, ReactNode } from 'react'
import styles from './AnimateIn.module.css'

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimateIn({ children, className = '', delay }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.root} ${visible ? styles.visible : ''} ${className}`.trim()}
      style={delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
