const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF6600",
              "@layout-header-height": "100px",
              "@layout-header-background": "#F9F9F9",
              "@btn-default-bg": "#fff0",
              "@btn-default-border": "#FF6600",
              "@btn-border-radius-base": "6px",
              "@btn-default-color": "#FF6600",
              "@layout-footer-background": "#FFF",
              "@layout-footer-padding": "0px",
              "@layout-header-padding": "0 90px",
              "@carousel-dot-width": "8px",
              "@carousel-dot-height": "8px",
              "@border-radius-base": "16px",
              "@layout-body-background": "#F9F9F9",
              "@drawer-body-padding": "38px 90px 38px 54px",
              "@layout-sider-background": "#FFF",
              "@btn-disable-bg": "#D8D8D8",
              "@btn-disable-color": "#FFF",
              "@btn-disable-border": "#D8D8D8",
              "@modal-header-border-color-split": "#00000000",
              "@modal-footer-border-color-split": "#00000000",
              "@modal-content-bg": "#F4F4F4",
              "@modal-header-bg": "#F4F4F4",
              "@modal-footer-bg": "#F4F4F4",
              "@modal-mask-bg": "fade(@black, 66%)",
              "@slider-rail-background-color": "#D8D8D8",
              "@slider-track-background-color": "#D8D8D8",
              "@slider-handle-background-color": "#FFF",
              "@slider-handle-color": "#FF6600",
              "@checkbox-border-width": "2px",
              "@checkbox-size": "20px",
              "@input-height-base": "44px",
              "@input-border-color": "#CCCCCC",
              "@input-bg": "#00000000",
              "@select-border-color": "#CCCCCC",
              "@select-background": "#00000000",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
