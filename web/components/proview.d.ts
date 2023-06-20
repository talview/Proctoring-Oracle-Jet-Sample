import { h } from "preact";
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
export declare function Proview({ proviewUrl, proviewToken, profileId, sessionId, sessionTitle, sessionType, }: Props): h.JSX.Element;
export {};
