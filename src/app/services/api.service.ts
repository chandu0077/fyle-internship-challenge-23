import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(userName: string) {
    return this.httpClient.get(`https://api.github.com/users/${userName}`);
  }

  getUserRepos(userName: string, pageNumber: number) {
    return this.httpClient.get(
      `https://api.github.com/users/${userName}/repos?per_page=10&page=${pageNumber}`
    );
  }
}
