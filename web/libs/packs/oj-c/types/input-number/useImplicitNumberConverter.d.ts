/// <reference types="ojconverter" />
import { NumberConverter } from 'ojs/ojconverter-nativenumber';
import { ComponentProps } from 'preact';
import { InputNumber } from './input-number';
declare type InputNumberProps = ComponentProps<typeof InputNumber>;
declare type UseImplicitNumberConverterProps = {
    converter?: InputNumberProps['converter'];
};
export declare function useImplicitNumberConverter({ converter }: UseImplicitNumberConverterProps): import("ojs/ojconverter")<number> | NumberConverter;
export {};
