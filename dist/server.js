"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const config_js_1 = require("./config/config.js");
app_js_1.app.listen(config_js_1.PORT, () => {
    console.log(`Server is running on port ${config_js_1.PORT}`);
});
//# sourceMappingURL=server.js.map