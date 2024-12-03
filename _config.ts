import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";

const site = lume({
    src: "./src/frontend/",
    dest: "./output/frontend/"
});

// CSS with extra stuff :D
site.use(sass());

// Get the chore list
site.data("getChoreList", async () => {
    const resp = await fetch("http://localhost:8000/getChoreList");
    const respText = await resp.text();
    return await JSON.parse(respText).chores;
})

export default site;
