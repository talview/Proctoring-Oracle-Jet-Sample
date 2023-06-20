/// <reference types="ojvalidator" />
/// <reference types="ojvalidator-async" />
import { ComponentMessageItem } from '@oracle/oraclejet-preact/UNSAFE_ComponentMessage';
import Validator from 'ojs/ojvalidator';
import AsyncValidator from 'ojs/ojvalidator-async';
import { StateUpdater } from 'preact/hooks';
import { ComponentMessagingState } from '../UNSAFE_useComponentMessaging/useComponentMessaging';
export declare const ValidationResult: {
    readonly VALID: "VALID";
    readonly INVALID: "INVALID";
    readonly STALE: "STALE";
};
export declare type ValidationResult = typeof ValidationResult[keyof typeof ValidationResult];
export declare type ValidState = 'valid' | 'pending' | 'invalidHidden' | 'invalidShown';
export declare type ValidatorLike<V> = Validator<V> | AsyncValidator<V>;
export declare type ValidationOptions = {
    doNotClearMessagesCustom?: boolean;
};
export declare type ValidationState<V> = {
    valid: ValidState;
    setValid: StateUpdater<ValidState>;
    deferredValidate: (value: V) => void | ComponentMessageItem[];
    fullValidate: (value: V, options?: ValidationOptions) => Promise<boolean>;
    validateValueOnInternalChange: (value: V, options?: ValidationOptions) => Promise<ValidationResult>;
    validateValueOnExternalChange: (value: V) => ValidationResult;
};
export declare type UseValidatorsProps<V> = {
    componentMessagingState: ComponentMessagingState;
    defaultValidState?: ValidState;
    deferredValidators?: ValidatorLike<V>[];
    validators?: ValidatorLike<V>[];
    addBusyState?: (desc?: string) => () => void;
    onValidChanged?: (valid: ValidState) => void;
};
export declare function useValidators<V>({ componentMessagingState, defaultValidState, deferredValidators, validators, addBusyState, onValidChanged }: UseValidatorsProps<V>): ValidationState<V>;
