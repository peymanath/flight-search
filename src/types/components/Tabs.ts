import type { ReactNode } from 'react';

export interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

export interface BasicTabsTabDataType {
    id: number;
    iconTab?: JSX.Element | string;
    indexTab: number;
    labelTab: string;
    TabPanelData: JSX.Element | string;
}

export interface BasicTabsType {
    tabData: BasicTabsTabDataType[];
}
