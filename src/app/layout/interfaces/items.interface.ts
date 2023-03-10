export interface NavItems {
  title: string;
  icon: string;
  childrens: NavItem[] 
}

export interface NavItem {
  route: string;
  title:string;
  icon: string;
}