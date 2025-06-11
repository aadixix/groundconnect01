// utils/colorUtils.js
export function applyDynamicColors(homeSettings) {
    if (typeof document !== 'undefined' && homeSettings) {
        const root = document.documentElement;

        if (homeSettings.PrimaryColor) {
            root.style.setProperty('--primary-color', homeSettings.PrimaryColor);
        }

        if (homeSettings.SecondaryColor) {
            root.style.setProperty('--secondary-color', homeSettings.SecondaryColor);
        }
    }
}

// Hook for using dynamic colors in React components
export function useDynamicColors(homeSettings) {
    const primaryColor = homeSettings?.PrimaryColor || '#279842';
    const secondaryColor = homeSettings?.SecondaryColor || '#1f7445';

    return {
        primaryColor,
        secondaryColor,

    };
}
