define(["require", "exports", "preact/jsx-runtime", "preact/hooks"], function (require, exports, jsx_runtime_1, hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Proview = void 0;
    function Proview({ proviewUrl, proviewToken, profileId, sessionId, sessionTitle, sessionType, }) {
        (0, hooks_1.useEffect)(() => {
            const initProview = () => {
                ((window, document, scriptType, scriptUrl, propertyKey) => {
                    var _a, _b;
                    window.TalviewProctor = propertyKey;
                    window[propertyKey] =
                        window[propertyKey] ||
                            function () {
                                (window[propertyKey].q = window[propertyKey].q || []).push(arguments);
                            };
                    window[propertyKey].l = 1 * new Date();
                    const script = document.createElement("script");
                    const firstScript = (_a = document.getElementsByTagName(scriptType)) === null || _a === void 0 ? void 0 : _a[0];
                    script.async = true;
                    script.src = scriptUrl;
                    (_b = firstScript.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(script, firstScript);
                })(window, document, "script", proviewUrl, "tv");
                window.tv("init", proviewToken, {
                    internalTesting: false,
                    profileId: profileId,
                    session: sessionId,
                    isIDRequired: true,
                    sessionTitle: sessionTitle,
                    session_type: "ai_proctor",
                    clear: false,
                    screen: true,
                    skipHardwareTest: false,
                    previewStyle: "position: fixed; bottom: 0px;",
                    initCallback: function () { },
                });
            };
            initProview();
        }, []);
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    exports.Proview = Proview;
});
//# sourceMappingURL=proview.js.map