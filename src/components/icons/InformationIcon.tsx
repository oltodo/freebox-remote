import type { SVGProps } from 'react'
import { forwardRef } from 'react'

export const InformationIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden
        data-slot="icon"
        ref={ref}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.313 10.25.092-.045a1.686 1.686 0 0 1 2.392 1.917l-1.594 6.38a1.687 1.687 0 0 0 2.392 1.92l.092-.047M12 3.5h.018v.018H12V3.5Z"
        />
      </svg>
    )
  },
)
