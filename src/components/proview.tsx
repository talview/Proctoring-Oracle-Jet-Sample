import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

type Props = Readonly<{
  proviewUrl: string;
  proviewToken: string;
  profileId: string;
  sessionId: string;
  sessionTitle: string;
  sessionType: string;
}>;

declare global {
  interface Window {
    TalviewProctor: string;
    tv: (...args: any[]) => void;
  }
}

export function Proview({
  proviewUrl,
  proviewToken,
  profileId,
  sessionId,
  sessionTitle,
  sessionType,
}: Props) {
  useEffect(() => {
    const initProview = () => {
      ((
        window: Window,
        document: Document,
        scriptType: string,
        scriptUrl: string,
        propertyKey: string
      ) => {
        window.TalviewProctor = propertyKey;
        window[propertyKey] =
          window[propertyKey] ||
          function () {
            (window[propertyKey].q = window[propertyKey].q || []).push(
              arguments
            );
          };
        //@ts-ignore
        window[propertyKey].l = 1 * new Date();
        const script = document.createElement("script") as HTMLScriptElement;
        const firstScript = document.getElementsByTagName(scriptType)?.[0];
        script.async = true;
        script.src = scriptUrl;
        firstScript.parentNode?.insertBefore(script, firstScript);
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
        initCallback: function () {},
      });
    };

    initProview();
  }, []);

  return <></>;
}
