var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define(["require", "exports", "preact/jsx-runtime", "preact/hooks", "ojs/ojresponsiveutils", "ojs/ojtoolbar", "ojs/ojmenu", "ojs/ojbutton"], function (require, exports, jsx_runtime_1, hooks_1, ResponsiveUtils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Header = void 0;
    ResponsiveUtils = __importStar(ResponsiveUtils);
    function Header({ appName, userLogin }) {
        const mediaQueryRef = (0, hooks_1.useRef)(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")));
        const [isSmallWidth, setIsSmallWidth] = (0, hooks_1.useState)(mediaQueryRef.current.matches);
        (0, hooks_1.useEffect)(() => {
            mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
            return (() => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange));
        }, [mediaQueryRef]);
        function handleMediaQueryChange(e) {
            setIsSmallWidth(e.matches);
        }
        function getDisplayType() {
            return (isSmallWidth ? "icons" : "all");
        }
        ;
        function getEndIconClass() {
            return (isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon");
        }
        return ((0, jsx_runtime_1.jsx)("header", Object.assign({ role: "banner", class: "oj-web-applayout-header" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-flex-bar-middle oj-sm-align-items-baseline" }, { children: [(0, jsx_runtime_1.jsx)("span", { role: "img", class: "oj-icon demo-oracle-icon", title: "Oracle Logo", alt: "Oracle Logo" }), (0, jsx_runtime_1.jsx)("h1", Object.assign({ class: "oj-sm-only-hide oj-web-applayout-header-title", title: "Application Name" }, { children: appName }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ class: "oj-flex-bar-end" }, { children: (0, jsx_runtime_1.jsx)("oj-toolbar", { children: (0, jsx_runtime_1.jsxs)("oj-menu-button", Object.assign({ id: "userMenu", display: getDisplayType(), chroming: "borderless" }, { children: [(0, jsx_runtime_1.jsx)("span", { children: userLogin }), (0, jsx_runtime_1.jsx)("span", { slot: "endIcon", class: getEndIconClass() }), (0, jsx_runtime_1.jsxs)("oj-menu", Object.assign({ id: "menu1", slot: "menu" }, { children: [(0, jsx_runtime_1.jsx)("oj-option", Object.assign({ id: "pref", value: "pref" }, { children: "Preferences" })), (0, jsx_runtime_1.jsx)("oj-option", Object.assign({ id: "help", value: "help" }, { children: "Help" })), (0, jsx_runtime_1.jsx)("oj-option", Object.assign({ id: "about", value: "about" }, { children: "About" })), (0, jsx_runtime_1.jsx)("oj-option", Object.assign({ id: "out", value: "out" }, { children: "Sign Out" }))] }))] })) }) }))] })) })));
    }
    exports.Header = Header;
});
//# sourceMappingURL=header.js.map