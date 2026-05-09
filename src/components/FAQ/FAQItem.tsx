import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <button
        className={styles.question}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <span className={styles.plus} aria-hidden="true">
          +
        </span>
      </button>
      <div
        className={styles.answer}
        hidden={!open}
        id={`faq-${question.slice(0, 20).replace(/\s+/g, '-')}`}
      >
        {answer}
      </div>
    </div>
  )
}
