export interface DataElement {
    data: {
        pname: string;
        stack: Array<string>;
        curl: string;
        lurl: string;
        createdby: string;
    };
    id: string;
}

export interface DataElementWithoutId {
    pname: string;
    stack: Array<string>;
    curl: string;
    lurl: string;
    createdby: string;
}