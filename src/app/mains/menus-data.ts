export class MENUS{
    headerNav:Array<Object>;
    menuData1:Array<Menus>;
    menuData2:Array<Menus>;
    menuData3:Array<Menus>;
}
export class Menus{ 
    title:string;
    id:number;
    icon:string;
    state?:string;
    isShow:boolean;
    isActive:boolean;
    url?:string;
    children?:Array<Object>;
  }
