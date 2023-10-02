const style = getComputedStyle(document.body);
export const mobileMaxWidth = style.getPropertyValue('--mobile-max-width');
export const tabletMaxWidth = style.getPropertyValue('--tablet-max-width');
export const minHeaderWidth = style.getPropertyValue('--min-header-width');
export const startingHeaderWidth = style.getPropertyValue('--starting-header-width');
export const minContentWidth = style.getPropertyValue('--min-content-width');
export const navMinimizedWidth = style.getPropertyValue('--header-minimized-width');
export const minimizedDividerX = style.getPropertyValue('--divider-minimized-width');
