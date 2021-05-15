import { createGlobalStyle } from 'styled-components'

export const AdobeClean = createGlobalStyle`
  @font-face {
    font-weight: 200;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-Light.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-Light.woff') format('woff');

    font-display: fallback;

  }

  @font-face {
    font-weight: 200;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-LightIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-LightIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-SemiLight.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-SemiLight.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 300;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-SemiLightIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-SemiLightIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-Regular.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-Regular.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-It.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-It.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-Bold.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-Bold.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-BoldIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BoldIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-ExtraBold.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-ExtraBold.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-ExtraBoldIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-ExtraBoldIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-Black.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-Black.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 900;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: normal;
    src:
      url('/fonts/adobe-clean/AdobeClean-BlackIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BlackIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: semi-condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-SemiCn.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-SemiCn.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: semi-condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-SemiCnIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-SemiCnIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: semi-condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-BoldSemiCn.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BoldSemiCn.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: semi-condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-BoldSemiCnIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BoldSemiCnIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-Cond.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-Cond.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 400;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-CondIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-CondIt.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: normal;
    font-stretch: condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-BoldCond.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BoldCond.woff') format('woff');

    font-display: fallback;
  }

  @font-face {
    font-weight: 700;
    font-family: 'Adobe Clean';
    font-style: italic;
    font-stretch: condensed;
    src:
      url('/fonts/adobe-clean/AdobeClean-BoldCondIt.woff2') format('woff2'),
      url('/fonts/adobe-clean/AdobeClean-BoldCondIt.woff') format('woff');

    font-display: fallback;
  }
`
