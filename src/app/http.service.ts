import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://dummy.restapiexample.com/api/v1/";
  httpHeaders:HttpHeaders=new HttpHeaders()
                               .set("content-type","application/json")

  constructor(private http:HttpClient) { }

// getDataFromServer(endpoint:string){
//   const url=this.baseUrl + endpoint;
//   return this.http.get(url,{headers:this.httpHeaders})
// }


// getEmployees(): Observable<any> {
//   return this.http.get(this.baseUrl);
// }
 

getProjectListById(id: any) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.get(this.baseUrl  + '/employee/' + id, { headers: this.httpHeaders })
}




postDataToServer(endpoint:string,data:any){
  const url=this.baseUrl + endpoint;
  return this.http.post(url,data, {headers:this.httpHeaders})
}


getEmployeeList() {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.get(this.baseUrl  + '/employees', { headers: this.httpHeaders })
}

updateEmployee(data: any, id: any) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put(this.baseUrl  + id, data, { headers: this.httpHeaders });
}



}
