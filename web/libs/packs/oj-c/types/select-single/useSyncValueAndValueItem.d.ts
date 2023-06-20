import { Optional } from 'oj-c/select-common/utils/utils';
import { ItemContext } from 'ojs/ojcommontypes';
import { DataProvider } from 'ojs/ojdataprovider';
import { StateUpdater } from 'preact/hooks';
declare type Value<K> = Optional<K>;
declare type ValueItem<K, D> = Optional<ItemContext<K, D>>;
export declare type UseSyncValueAndValueItemProps<K, D> = {
    addBusyState: (desc?: string) => () => void;
    dataProvider?: Optional<DataProvider<K, D>>;
    setIsLoading: StateUpdater<boolean>;
    setValue: StateUpdater<Value<K>>;
    setValueItem: (value: ValueItem<K, D>) => void;
    value?: Value<K>;
    valueItem?: ValueItem<K, D>;
};
export declare function useSyncValueAndValueItem<K extends string | number, D extends Record<string, any>>({ addBusyState, dataProvider, setIsLoading, setValue, setValueItem, value, valueItem }: UseSyncValueAndValueItemProps<K, D>): void;
export {};
