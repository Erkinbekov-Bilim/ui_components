import React from 'react';
import './Button.css';

interface IButtonProps extends React.PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string;
}

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  text,
  className,
  style,
  onClick,
  title,
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      style={style}
      onClick={onClick}
      title={title}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
