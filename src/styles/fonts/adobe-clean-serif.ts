import { createGlobalStyle } from 'styled-components'

export const AdobeCleanSerif = createGlobalStyle`
    @font-face {
        font-weight: 400;
        font-family: 'Adobe Clean Serif';
        font-style: normal;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Regular.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Regular.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 400;
        font-family: 'Adobe Clean Serif';
        font-style: italic;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-It.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-It.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 500;
        font-family: 'Adobe Clean Serif';
        font-style: normal;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Medium.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Medium.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 500;
        font-family: 'Adobe Clean Serif';
        font-style: italic;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-MediumIt.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-MediumIt.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 700;
        font-family: 'Adobe Clean Serif';
        font-style: normal;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Bold.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Bold.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 700;
        font-family: 'Adobe Clean Serif';
        font-style: italic;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-BoldIt.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-BoldIt.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 900;
        font-family: 'Adobe Clean Serif';
        font-style: normal;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Black.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-Black.woff') format('woff');

        font-display: fallback;
    }

    @font-face {
        font-weight: 900;
        font-family: 'Adobe Clean Serif';
        font-style: italic;
        font-stretch: normal;
        src:
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-BlackIt.woff2') format('woff2'),
            url('/fonts/adobe-clean-serif/AdobeCleanSerif-BlackIt.woff') format('woff');

        font-display: fallback;
    }
`
