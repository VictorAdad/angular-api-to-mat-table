import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactUsModel } from '../models/data.model';

const TEST_API = 'https://reqres.in/api/users';
const ContactList_API = 'http://10.100.3.109:31506/contactos/';
const SingleContact_API = 'http://10.100.3.109:31506/contactus/forms'; // + el ID

@Injectable({
    providedIn: 'root'
})

export default class InputTableService {
    constructor(private http: HttpClient) { }
    // READ
    getAllEntries(): Observable<ContactUsModel> {
        // const URL_DATA = API_URL + GET_DATA_URL;
        return this.http.get<ContactUsModel>(ContactList_API);
    }

    getSingleEntry(param_id: string): Observable<ContactUsModel> {
        return this.http.get<ContactUsModel>(SingleContact_API + param_id);
    }
}