/// <reference types="ojconverter" />
/// <reference types="ojvalidator" />
/// <reference types="ojvalidator-async" />
import Converter from 'ojs/ojconverter';
import Validator from 'ojs/ojvalidator';
import AsyncValidator from 'ojs/ojvalidator-async';
export declare type DisplayOptions = {
    converterHint?: 'display' | 'none';
    messages?: 'display' | 'none';
    validatorHint?: 'display' | 'none';
};
export declare type Help = {
    instruction?: string;
};
export declare type HelpHints = {
    definition?: string;
    source?: string;
    sourceText?: string;
};
export declare type UseAssistiveTextProps = {
    addBusyState?: (desc: string) => () => void;
    converter?: Converter<unknown>;
    displayOptions?: DisplayOptions;
    help?: Help;
    helpHints?: HelpHints;
    validators?: (Validator<unknown> | AsyncValidator<unknown>)[];
};
export declare function useAssistiveText({ addBusyState, converter, displayOptions, help, helpHints, validators }: UseAssistiveTextProps): {
    assistiveText: string | undefined;
    helpSourceLink: string | undefined;
    helpSourceText: string | undefined;
};
