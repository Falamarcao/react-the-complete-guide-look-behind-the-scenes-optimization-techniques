import { ButtonHTMLAttributes, ElementType, memo, ReactNode } from 'react';
import { log } from '../../log.ts';

interface IconButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode;
  icon: ElementType;
}

// apply memo() higher as possible in the component hierarchy tree.
// avoid memo() in component that frequently change - no reason to memorize the component.
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
