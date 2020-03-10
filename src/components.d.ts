/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DarkShadow {
    'animation': { open: any; close: any; };
    'close': () => Promise<void>;
    'closeOnOutsideClick': boolean;
    'isDarkOutside': boolean;
    'open': () => Promise<void>;
    'shadowTitle': string;
    'showCloseIcon': boolean;
    'showFooter': boolean;
    'showHeader': boolean;
    'visible': boolean;
    'width': string;
  }
}

declare global {


  interface HTMLDarkShadowElement extends Components.DarkShadow, HTMLStencilElement {}
  var HTMLDarkShadowElement: {
    prototype: HTMLDarkShadowElement;
    new (): HTMLDarkShadowElement;
  };
  interface HTMLElementTagNameMap {
    'dark-shadow': HTMLDarkShadowElement;
  }
}

declare namespace LocalJSX {
  interface DarkShadow {
    'animation'?: { open: any; close: any; };
    'closeOnOutsideClick'?: boolean;
    'isDarkOutside'?: boolean;
    'shadowTitle'?: string;
    'showCloseIcon'?: boolean;
    'showFooter'?: boolean;
    'showHeader'?: boolean;
    'visible'?: boolean;
    'width'?: string;
  }

  interface IntrinsicElements {
    'dark-shadow': DarkShadow;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'dark-shadow': LocalJSX.DarkShadow & JSXBase.HTMLAttributes<HTMLDarkShadowElement>;
    }
  }
}


