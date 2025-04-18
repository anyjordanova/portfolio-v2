import { button } from './ui/button'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button = ({ variant, children }: ButtonProps) => (
  <button className={button({ variant })}>
    {children}
  </button>
)