import {Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  tutorials = signal<Tutorial[]>([
    { id: 1, title: 'Hướng dẫn Angular cơ bản', description: 'Khóa học cơ bản về Angular cho người mới bắt đầu.', published: true },
    { id: 2, title: 'Hướng dẫn TypeScript', description: 'Giới thiệu về TypeScript và các khái niệm quan trọng.', published: false },
    { id: 3, title: 'Hướng dẫn RxJS', description: 'Khám phá RxJS và các thao tác với Observable trong Angular.', published: true },
    { id: 4, title: 'Hướng dẫn Angular Material', description: 'Cách sử dụng Angular Material để tạo giao diện đẹp và hiện đại.', published: false },
    { id: 5, title: 'Hướng dẫn về Service trong Angular', description: 'Hiểu về dịch vụ (Service) và cách sử dụng trong Angular.', published: true }
  ]);


  addTutorial(newTutorial: Tutorial) {
    if (newTutorial.title && newTutorial.description) {
      const newId = this.tutorials().length ? Math.max(...this.tutorials().map(t => t.id || 0)) + 1 : 1;
      this.tutorials.update(tutorials => [
        ...tutorials,
        { ...newTutorial, id: newId }
      ]);
    }
  }

  getTutorials(): Tutorial[] {
    return this.tutorials();
  }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
