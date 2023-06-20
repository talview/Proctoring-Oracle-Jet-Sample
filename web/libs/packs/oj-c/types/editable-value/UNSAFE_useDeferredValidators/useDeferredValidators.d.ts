import { ValidatorLike } from '../UNSAFE_useValidators/useValidators';
declare type UseDeferredValidatorsProps = {
    labelHint?: string;
    required?: boolean;
    requiredMessageDetail?: string;
};
export declare function useDeferredValidators<V>({ labelHint, required, requiredMessageDetail }: UseDeferredValidatorsProps): ValidatorLike<V>[];
export {};
