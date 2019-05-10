export interface DataElement {
    id: string;
    data: {
        purl: string;
        stack: Array<string>;
    }
}

export interface DataElementWithoutId {
    purl: string;
    stack: Array<string>;
}