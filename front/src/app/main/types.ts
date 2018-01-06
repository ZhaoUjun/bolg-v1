export class Tag{
  id:number;
  name:string
}

export class Article{
  id:number;
  name:string;
  createTime:number;
  tags:Tag[];
  content:string;
  title:string;
  readCnt:number;
}

export interface ArticleResponse {
  code: string;
  data:Article[];
  msg:string
}

