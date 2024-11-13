import { ButtonHTMLAttributes, ElementType, memo, ReactNode } from 'react';
import { log } from '../../log.ts';

interface IconButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode;
  icon: ElementType;
}

const IconButton = memo(
  ({ children, icon: Icon, ...props }: IconButtonProps) => {
    log('<IconButton /> rendered', 2);

    return (
      <button {...props} className="button">
        <Icon className="button-icon" />
        <span className="button-text">{children}</span>
      </button>
    );
  }
);

export default IconButton;
