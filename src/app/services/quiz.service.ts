import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService {
  post(arg0: string, data: any) {
    throw new Error('Method not implemented.');
  }

  Data: any;

  private pathUrl = 'http://localhost:1337/question';
  constructor(private http: HttpClient) { }

  // getQ(url: string) {
  //   return this.http.get(url);
  // }

  getQ(url: string) {
    return this.http.get<any>(this.pathUrl);
  }


  getAll() {
    return [
      { id: 'data/javascript.json', name: 'JavaScript' },
      // { id: 'data/aspnet.json', name: 'Asp.Net' },
      // { id: 'data/csharp.json', name: 'C Sharp' },
      // { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }

  sendData(data:any): Observable<any>{
    return this.http.post(this.pathUrl,data)
      
  }

}
