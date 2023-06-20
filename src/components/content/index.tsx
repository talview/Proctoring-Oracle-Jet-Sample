import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { Proview } from "../proview";

export function Content() {
  const proviewConfiguration = {
    proviewUrl: "<Proview Script URL>",
    proviewToken: "<Proview Token>",
    profileId: "p-" + Math.random(),
    sessionId: "s-" + Math.random(),
    sessionTitle: "Sample Proview Application",
    sessionType: "ai_proctor",
  };

  const [showProview, setShowProview] = useState<boolean>(false);

  const onStartClick = () => {
    setShowProview(true);
  };

  const onStopClick = () => {
    localStorage.removeItem("tv_candidate_proctor");
    const script = Array.from(
      document.querySelectorAll(
        `script[src="https://cdn.proview.io/testing/v7-universal/v3.8/init.js"]`
      )
    );
    if (script[0]) {
      //@ts-ignore
      script[0].parentNode.removeChild(script[0]);
    }

    if (document.getElementById("proview_root")) {
      // @ts-ignore
      document.getElementById("proview_root").remove();
    }
    if (document.getElementById("tvp_recorder_container")) {
      // @ts-ignore
      document.getElementById("tvp_recorder_container").remove();
    }
    if (document.getElementById("tvp-chat-container")) {
      // @ts-ignore
      document.getElementById("tvp-chat-container").remove();
    }
    if (document.getElementById("screen_capture")) {
      // @ts-ignore
      document.getElementById("screen_capture").remove();
    }
    if (document.getElementById("#backdrop_element")) {
      // @ts-ignore
      document.getElementById("#backdrop_element").remove();
    }
    setShowProview(false);
  };

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <button style="background-color: grey" onClick={onStartClick}>Launch Proctoring</button>
      {showProview && (
        <Proview
          proviewUrl={proviewConfiguration.proviewUrl}
          proviewToken={proviewConfiguration.proviewToken}
          profileId={proviewConfiguration.profileId}
          sessionId={proviewConfiguration.sessionId}
          sessionTitle={proviewConfiguration.sessionTitle}
          sessionType={proviewConfiguration.sessionType}
        />
      )}
      {showProview && (
        <button
          onClick={onStopClick}
          style="position: absolute;z-index: 999999999;top: 20px;left: 20px;background-color: white;"
        >
          Stop Proctoring
        </button>
      )}
    </div>
  );
}
