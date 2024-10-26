import "tsx/esm";
import glob from "fast-glob";
import { renderToStaticMarkup } from "react-dom/server";

const renderables = glob.sync("**/*.11ty.tsx");
console.log(renderables);

export default function (eleventyConfig) {
  // We can add support for JSX too, at the same time:
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
    compile: function (...argz) {
      // console.log(argz);
      this.addDependencies("./style/style.11ty.tsx", renderables);
      return async function (data) {
        // console.log(data);
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
      };
    },
  });
  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");
}
