import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Problem } from './interfaces/problem';

@Injectable({
  providedIn: 'root'
})
export class ProblemsServiceService {

  constructor(public httpClient:HttpClient) { }


}
