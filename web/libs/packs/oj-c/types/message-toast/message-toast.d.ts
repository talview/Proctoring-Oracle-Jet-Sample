import { JetElement, JetSettableProperties, JetElementCustomEventStrict, JetSetPropertyType } from 'ojs/index';
import { GlobalProps } from 'ojs/ojvcomponent';
import 'ojs/oj-jsx-interfaces';
import { MessageToast as PreactMessageToast, MessageToastItem as PreactMessageToastItem } from '@oracle/oraclejet-preact/UNSAFE_MessageToast';
import { DataProvider, ItemMetadata } from 'ojs/ojdataprovider';
import { Action, DynamicTemplateSlots } from 'ojs/ojvcomponent';
import { ComponentProps } from 'preact';
import 'css!./message-toast-styles.css';
declare type CloseActionDetail<K, D> = {
    data: D;
    key: K;
    metadata?: ItemMetadata<K>;
};
declare type PreactMessageToastProps = ComponentProps<typeof PreactMessageToast>;
export declare type MessageToastItem = PreactMessageToastItem;
export declare type MessageToastTemplateContext<K, D> = {
    data: D;
    key: K;
    metadata?: ItemMetadata<K>;
};
export declare type MessageToastProps<Key = string | number, Data = MessageToastItem> = {
    data: DataProvider<Key, Data>;
    detailTemplateValue?: PreactMessageToastProps['detailRendererKey'];
    iconTemplateValue?: PreactMessageToastProps['iconRendererKey'];
    messageTemplates?: DynamicTemplateSlots<MessageToastTemplateContext<Key, Data>>;
    offset?: PreactMessageToastProps['offset'];
    position?: PreactMessageToastProps['position'];
    onOjClose?: Action<CloseActionDetail<Key, Data>>;
};
export declare const MessageToast: import("preact").ComponentType<import("ojs/ojvcomponent").ExtendGlobalProps<MessageToastProps<string | number, PreactMessageToastItem>>>;
export {};
export interface CMessageToastElement extends JetElement<CMessageToastElementSettableProperties>, CMessageToastElementSettableProperties {
    addEventListener<T extends keyof CMessageToastElementEventMap>(type: T, listener: (this: HTMLElement, ev: CMessageToastElementEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof CMessageToastElementSettableProperties>(property: T): CMessageToastElement[T];
    getProperty(property: string): any;
    setProperty<T extends keyof CMessageToastElementSettableProperties>(property: T, value: CMessageToastElementSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, CMessageToastElementSettableProperties>): void;
    setProperties(properties: CMessageToastElementSettablePropertiesLenient): void;
}
export namespace CMessageToastElement {
    interface ojClose<Key = string | number, Data = MessageToastItem> extends CustomEvent<CloseActionDetail<Key, Data> & {}> {
    }
    type dataChanged = JetElementCustomEventStrict<CMessageToastElement['data']>;
    type detailTemplateValueChanged = JetElementCustomEventStrict<CMessageToastElement['detailTemplateValue']>;
    type iconTemplateValueChanged = JetElementCustomEventStrict<CMessageToastElement['iconTemplateValue']>;
    type offsetChanged = JetElementCustomEventStrict<CMessageToastElement['offset']>;
    type positionChanged = JetElementCustomEventStrict<CMessageToastElement['position']>;
}
export interface CMessageToastElementEventMap extends HTMLElementEventMap {
    'ojClose': CMessageToastElement.ojClose;
    'dataChanged': JetElementCustomEventStrict<CMessageToastElement['data']>;
    'detailTemplateValueChanged': JetElementCustomEventStrict<CMessageToastElement['detailTemplateValue']>;
    'iconTemplateValueChanged': JetElementCustomEventStrict<CMessageToastElement['iconTemplateValue']>;
    'offsetChanged': JetElementCustomEventStrict<CMessageToastElement['offset']>;
    'positionChanged': JetElementCustomEventStrict<CMessageToastElement['position']>;
}
export interface CMessageToastElementSettableProperties<Key = string | number, Data = MessageToastItem> extends JetSettableProperties {
    data: MessageToastProps<Key, Data>['data'];
    detailTemplateValue?: MessageToastProps<Key, Data>['detailTemplateValue'];
    iconTemplateValue?: MessageToastProps<Key, Data>['iconTemplateValue'];
    offset?: MessageToastProps<Key, Data>['offset'];
    position?: MessageToastProps<Key, Data>['position'];
}
export interface CMessageToastElementSettablePropertiesLenient<Key = string | number, Data = MessageToastItem> extends Partial<CMessageToastElementSettableProperties<Key, Data>> {
    [key: string]: any;
}
export interface MessageToastIntrinsicProps extends Partial<Readonly<CMessageToastElementSettableProperties<any, any>>>, GlobalProps, Pick<preact.JSX.HTMLAttributes, 'ref' | 'key'> {
    children?: import('preact').ComponentChildren;
    onojClose?: (value: CMessageToastElementEventMap['ojClose']) => void;
    ondataChanged?: (value: CMessageToastElementEventMap['dataChanged']) => void;
    ondetailTemplateValueChanged?: (value: CMessageToastElementEventMap['detailTemplateValueChanged']) => void;
    oniconTemplateValueChanged?: (value: CMessageToastElementEventMap['iconTemplateValueChanged']) => void;
    onoffsetChanged?: (value: CMessageToastElementEventMap['offsetChanged']) => void;
    onpositionChanged?: (value: CMessageToastElementEventMap['positionChanged']) => void;
}
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oj-c-message-toast': MessageToastIntrinsicProps;
        }
    }
}
