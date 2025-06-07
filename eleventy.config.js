import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import { extractCss, setup } from "goober";
import React from "react";
import { cssManager } from "./src/CSSManager.js";
import fs from "fs";
import path from "path";

export default function (eleventyConfig) {
  // Setup goober with React
  setup(React.createElement);
  
  // Reset CSS storage at the start of each build
  eleventyConfig.on("eleventy.before", () => {
    cssManager.reset();
  });
  
  // After all templates are processed, write CSS file
  eleventyConfig.on("eleventy.after", ({ dir }) => {
    if (cssManager.hasCSS()) {
      console.log('[11ty] CSS collected, writing to file');
      const cssPath = path.join(dir.output, 'style.css');
      fs.writeFileSync(cssPath, cssManager.getAllCSS());
    }
  });

  // We can add support for JSX too, at the same time:
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function (...argz) {
      // console.log(argz);
      // Don't add dependencies - style template will render when requested
      return async function (data) {
        // console.log(data);
        let content = await this.defaultRenderer(data);
        const html = renderToStaticMarkup(content);
        
        // Extract CSS after rendering and add to manager
        const css = extractCss();
        if (css) {
          cssManager.addCSS(css);
        }
        
        return html;
      };
    },
  });
  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");
}
