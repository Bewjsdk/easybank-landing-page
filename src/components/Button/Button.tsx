import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <button className="btn-default">{children}</button>
}

export default Button