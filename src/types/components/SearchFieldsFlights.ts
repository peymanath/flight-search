export interface FieldsSearchItemInterface {
    id: number;
    title: string;
}

export interface FieldsSearchInterface {
    label: string;
    options: FieldsSearchItemInterface[];
    icon: JSX.Element | string;
}
