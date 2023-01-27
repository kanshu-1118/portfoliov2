
export type skillFile = {
    0:string;
    1:string;
    2:string;
    3:string;
    4:string;
    5:string;
    6:string;
};


export type worksType = {
    id : string;
    name : string;
    type : string;
    langage : string[];
    nop : number;
    img : string;
    text : string;
}

export type worksArrayType = {
    ArrayList : worksType[];
};