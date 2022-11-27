import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/data/data/com.termux/files/home/project/mikwiki/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.130_vuepress@2.0.0-beta.53/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
