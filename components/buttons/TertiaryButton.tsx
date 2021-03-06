import { ReactElement } from 'react';
import BaseButton, { ButtonProps, StyledButtonProps } from './BaseButton';
import colors, {
  ColorName,
  overlayQuaternary,
  overlayTertiary,
} from '../../styles/colors';

export const tertiaryStyle = (color?: ColorName): StyledButtonProps => ({
  darkStates: {
    default: {
      color: 'var(--theme-label-tertiary)',
      background: 'none',
      borderColor: 'transparent',
    },
    hover: {
      color: color ? colors[color]['40'] : 'var(--theme-label-primary)',
      background: color ? overlayQuaternary(color) : `${colors.salt['90']}1F`,
    },
    active: {
      color: color ? overlayTertiary(color) : 'var(--theme-label-primary)',
      background: color ? `${colors[color]['10']}33` : `${colors.salt['90']}33`,
    },
    pressed: {
      color: color ? colors[color]['40'] : 'var(--theme-label-primary)',
    },
    disabled: {
      color: 'var(--theme-label-disabled)',
    },
  },
  lightStates: {
    hover: {
      color: color ? colors[color]['60'] : undefined,
      background: color ? overlayQuaternary(color) : `${colors.pepper['10']}1F`,
    },
    active: {
      color: color ? colors[color]['60'] : undefined,
      background: color ? overlayTertiary(color) : `${colors.pepper['10']}33`,
    },
    pressed: {
      color: color ? colors[color]['60'] : undefined,
    },
  },
});

export default function TertiaryButton<Tag extends keyof JSX.IntrinsicElements>(
  props: ButtonProps<Tag>,
): ReactElement {
  const style = tertiaryStyle(props.themeColor);
  return BaseButton<Tag>({
    ...props,
    ...style,
  });
}
