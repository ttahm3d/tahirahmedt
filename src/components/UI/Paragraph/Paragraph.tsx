import { CSSProperties } from 'react'

interface IParagraph extends React.HTMLAttributes<HTMLParagraphElement> {
  children: JSX.Element
  style?: CSSProperties
}

export default function Paragraph({ children, style }: IParagraph) {
  return (
    <p className={`text-justify text-base first-letter:pl-4`} style={style}>
      {children}
    </p>
  )
}
