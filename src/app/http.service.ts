import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="https://dummy.restapiexample.com/api/v1/";
  httpHeaders:HttpHeaders=new HttpHeaders()
                               .set("content-type","application/json")

  constructor(private http:HttpClient) { }



getEmployeeById(id: any) {
  
  return this.http.get(this.baseUrl  + '/employee/' + id, { headers: this.httpHeaders })
}



getEmployeeList() {
 
  return this.http.get(this.baseUrl  + '/employees', { headers: this.httpHeaders })
}



postDataToServer(endpoint:string,data:any){
  const url=this.baseUrl + endpoint;
  return this.http.post(url,data, {headers:this.httpHeaders})
}


putDataToServer(endpoint:string,data:any){
  const url=this.baseUrl + endpoint;
  return this.http.put(url,data, {headers:this.httpHeaders})
}



deleteEmployee( id: any) {
  
  return this.http.delete<any>(this.baseUrl  + id, { headers: this.httpHeaders  });
}

deleteDataFromServer(endpoint:string){
  const url=this.baseUrl + endpoint;
  return this.http.delete(url, {headers:this.httpHeaders})
}


}
