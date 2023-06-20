import { ComponentMessagingState } from '../UNSAFE_useComponentMessaging/useComponentMessaging';
import { ConverterErrorSymbol } from '../UNSAFE_useConverter/useConverter';
import { UseValidatorsProps, ValidationState, ValidState } from '../UNSAFE_useValidators/useValidators';
declare type PickedUseValidatorsProps<V> = Pick<UseValidatorsProps<V>, 'deferredValidators' | 'validators'>;
declare type UseValidationLifecycleProps<V> = PickedUseValidatorsProps<V> & {
    componentMessagingState: ComponentMessagingState;
    validationState: ValidationState<V>;
    addBusyState?: (desc?: string) => () => void;
    getValueForValidation: (valid: ValidState) => V | typeof ConverterErrorSymbol;
    setValueAfterValidation: (value: V) => void;
};
export declare function useValidationLifecycle<V>({ componentMessagingState, deferredValidators, validationState, validators, getValueForValidation, setValueAfterValidation }: UseValidationLifecycleProps<V>): {
    runFullValidationAndUpdateValue: () => Promise<void>;
};
export {};
