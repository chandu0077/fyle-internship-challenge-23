import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import * as userData from '../assets/json/userData.json';
import * as userReposData from '../assets/json/userRepos.json';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let service: ApiService;
  let httpController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule],
      providers: [ApiService],
      declarations: [AppComponent],
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  // Service Test for UserData
  it('should call getUser and return an object of user github data', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getUser('lovell').subscribe((res) => {
      console.log('RES', res);
      expect(res).toEqual(userData);
    });
    expect(service).toBeTruthy();
  });

  // Service Test for UserRepos
  it('should call getUser and return an object of user github data', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getUserRepos('lovell', 1).subscribe((res) => {
      console.log('RES', res);
      expect(res).toEqual(userReposData);
    });
    expect(service).toBeTruthy();
  });

  // Service Test for Component
  it('should render title in a p tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#mainTitle').textContent).toContain(
      'Welcome to Git Hub'
    );
  });
});
