import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})

export class SharedServie {
    private http = inject(HttpClient);
    private api = 'https://673c0d5a96b8dcd5f3f85990.mockapi.io/stone-oak-library/books';
    }

