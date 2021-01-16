import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Problem } from './interfaces/problem';
import { Tag } from './interfaces/tag';

@Injectable({
  providedIn: 'root'
})
export class ProblemsServiceService {

  constructor(public httpClient:HttpClient) { }


  getProblems():Observable<Problem[]>{
    return this.httpClient.get<Problem[]>(environment.baseURL+'/api/issues')
  }
  addProblem(problem:Problem):Observable<any>{
    return this.httpClient.post<any>(environment.baseURL+'/api/issues',problem)
  }
  getProblem(problemId:any):Observable<Problem>{
    return this.httpClient.get<Problem>(environment.baseURL+'/api/issues/'+problemId.toString())
  }
  deleteProblem(problemId:any):Observable<Problem>{
    return this.httpClient.delete<Problem>(environment.baseURL+'/api/issues/'+problemId.toString())
  }
  getTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(environment.baseURL+'/api/issues/tags/')
  }

}
