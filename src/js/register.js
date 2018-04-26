(() => {
    "use strict";

    const reg = /^WA-(\w+)$/;
    for(const target of document.querySelectorAll(".component")) {
        const tagName = reg.exec(target.tagName)[1];
        const name = tagName[0] + tagName.slice(1).toLowerCase();

        const Component = window[name];
        new Component({ target });
    }
})();
