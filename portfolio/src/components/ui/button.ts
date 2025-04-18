import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'px-6 py-3 rounded-full font-medium transition-colors',
  variants: {
    variant: {
      primary: 'bg-white text-black hover:bg-gray-200',
      secondary: 'border border-white text-white hover:bg-white hover:text-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})