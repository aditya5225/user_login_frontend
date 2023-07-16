import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
    constructor(private router: Router, private http: HttpClient) { }
    
    login(data: any): Observable<any> {
        return this.http
            .post(`http://localhost:5000/user/auth`, data)
            .pipe(
                map((x) => {
                    return x;
                })
            );
    }

    getAllUser(): Observable<any> {
        return this.http.get<any>(`http://localhost:5000/user/get-details`).pipe(
            map((x) => {
                return x;
            })
        );;
    }

    createUser(data: any): Observable<any> {
        return this.http
            .post(`http://localhost:5000/user/create-user`, data)
            .pipe(
                map((x) => {
                    return x;
                })
            );
    }

}

