import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    tulos = 'Moro';  // asetettu merkkijonoarvo muuttujalle tulos

    constructor(private http: HttpClient) {

    }

    getJson() {
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);   // tarkastellaan sisältöä consolessa
            this.tulos = data.license; // this.tulos hakee uuden arvon lisencen (string) nimen perusteella
        });
    }

    ngOnInit() {  // kutsutaan täällä metodia getJson
        this.getJson();
    }

}
