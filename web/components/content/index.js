define(["require", "exports", "preact/jsx-runtime", "preact/hooks", "../proview"], function (require, exports, jsx_runtime_1, hooks_1, proview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Content = void 0;
    function Content() {
        const proviewConfiguration = {
            proviewUrl: "<Proview Script URL>",
            proviewToken: "<Proview Token>",
            profileId: "p-" + Math.random(),
            sessionId: "s-" + Math.random(),
            sessionTitle: "Sample Proview Application",
            sessionType: "ai_proctor",
        };
        const [showProview, setShowProview] = (0, hooks_1.useState)(false);
        const onStartClick = () => {
            setShowProview(true);
        };
        const onStopClick = () => {
            localStorage.removeItem("tv_candidate_proctor");
            const script = Array.from(document.querySelectorAll(`script[src="https://cdn.proview.io/testing/v7-universal/v3.8/init.js"]`));
            if (script[0]) {
                script[0].parentNode.removeChild(script[0]);
            }
            if (document.getElementById("proview_root")) {
                document.getElementById("proview_root").remove();
            }
            if (document.getElementById("tvp_recorder_container")) {
                document.getElementById("tvp_recorder_container").remove();
            }
            if (document.getElementById("tvp-chat-container")) {
                document.getElementById("tvp-chat-container").remove();
            }
            if (document.getElementById("screen_capture")) {
                document.getElementById("screen_capture").remove();
            }
            if (document.getElementById("#backdrop_element")) {
                document.getElementById("#backdrop_element").remove();
            }
            setShowProview(false);
        };
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ class: "oj-web-applayout-max-width oj-web-applayout-content" }, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ style: "background-color: grey", onClick: onStartClick }, { children: "Launch Proctoring" })), showProview && ((0, jsx_runtime_1.jsx)(proview_1.Proview, { proviewUrl: proviewConfiguration.proviewUrl, proviewToken: proviewConfiguration.proviewToken, profileId: proviewConfiguration.profileId, sessionId: proviewConfiguration.sessionId, sessionTitle: proviewConfiguration.sessionTitle, sessionType: proviewConfiguration.sessionType })), showProview && ((0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onStopClick, style: "position: absolute;z-index: 999999999;top: 20px;left: 20px;background-color: white;" }, { children: "Stop Proctoring" })))] })));
    }
    exports.Content = Content;
});
//# sourceMappingURL=index.js.map