import styles from './Logo.module.css'

interface LogoProps {
  size?: 'sm' | 'md'
}

export function Logo({ size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 14 : 22
  return (
    <div className={`${styles.logo} ${size === 'sm' ? styles.sm : ''}`.trim()}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
      </svg>
      Lunestia
    </div>
  )
}
