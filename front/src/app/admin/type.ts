export class Article{
  title:string;
  content:string;
  authordId?:number;
  tagsId?:string[];
}

export class Tag{
  id:number;
  name:string;
}
