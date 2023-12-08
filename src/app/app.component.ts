import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fyle-internship';
  userData: any;
  userRepos: any;
  userName: any;
  totalRepos: any;
  p: number = 1;
  isLoading = true;
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getReposData(userName: string, pageNumber: number) {
    this.apiService
      .getUserRepos(userName, pageNumber)
      .subscribe((data: any) => {
        this.isLoading = false;
        this.p = pageNumber;

        this.userRepos = data;
        return data;
      });
  }

  pageChanged(pageNumber: number): void {
    this.isLoading = true;
    this.getReposData(this.userName, pageNumber);
  }

  async onSubmit(event: any, userName: string) {
    this.userName = userName;
    event.preventDefault();
    this.apiService.getUser(userName).subscribe((data) => {
      this.userData = data;
      this.totalRepos = this.userData.public_repos;
    });
    this.getReposData(this.userName, 1);
  }
}
