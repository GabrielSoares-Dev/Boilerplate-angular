import { Component, Input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() variant: ButtonVariant = 'primary';
  @Input() label = '';
  @Input() isLoading = false;
  @Input() onClick?: () => void;

  handleClick() {
    if (this.onClick) this.onClick();
  }

  isPrimary() {
    return this.variant === 'primary';
  }

  isSecondary() {
    return this.variant === 'secondary';
  }
}