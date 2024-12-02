import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
    src: "./src/frontend/",
    dest: "./output/frontend/"
});

// CSS with extra stuff :D
site.use(sass());
    
export default site;
