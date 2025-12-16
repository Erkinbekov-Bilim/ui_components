import React from 'react';
import './Button.css';
import {
  motion,
  type TargetAndTransition,
  type VariantLabels,
} from 'framer-motion';

interface IButtonProps extends React.PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  title?: string;
  whileHover?: VariantLabels | TargetAndTransition;
  whileTap?: VariantLabels | TargetAndTransition;
}

const Button: React.FC<IButtonProps> = ({
  type = 'button',
  text,
  className,
  style,
  onClick,
  title,
  children,
  whileHover,
  whileTap,
}) => {
  return (
    <motion.button
      type={type}
      className={className}
      style={style}
      onClick={onClick}
      title={title}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {text}
      {children}
    </motion.button>
  );
};

export default Button;
