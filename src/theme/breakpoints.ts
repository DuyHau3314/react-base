// breakpoints.ts
const size = {
  small: '768px',
  medium: '992px',
  large: '1200px'
};

export const device = {
  small: `(max-width: ${size.small})`,
  medium: `(max-width: ${size.medium})`,
  large: `(max-width: ${size.large})`
};
