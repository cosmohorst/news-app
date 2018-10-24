import { News } from "./news";

export class NewsSerializer {
    fromJson(json: any): News {
      const news = new News();
      news.title = json.title;
      news.description = json.description;
  
      return news;
    }
  
    toJson(news: News): any {
      return {
        title: news.title,
        description: news.description
      };
    }
  }