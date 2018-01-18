import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-http-test',
    templateUrl: './http-test.component.html',
    styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

    // apiosoite = 'http://media.mw.metropolia.fi/wbma';
    kuvaosoite = 'http://media.mw.metropolia.fi/wbma/uploads/';
    // http://media.mw.metropolia.fi/wbma/docs/

    tulos = 'Moro';  // asetettu merkkijonoarvo muuttujalle tulos
    apitulos = 'Moro taas'; // arvo muuttujalle apitulos
    apiosoite = 'http://media.mw.metropolia.fi/wbma';

    constructor(private http: HttpClient) {

    }

    getJson() {   // getJson-metodi
        interface Myinterface {
            license: string;
        }

        this.http.get<Myinterface>('assets/package.json').subscribe(data => {
            console.log(data);   // tarkastellaan sisältöä consolessa
            this.tulos = data.license; // this.tulos hakee uuden arvon lisencen (string) nimen perusteella
        });
    }

    getFromApi () { // this method fetches data from api of choice task B
        this.http.get(this.apiosoite + '/media').subscribe( data => {
           console.log(data[0].filename);
           this.apitulos = this.kuvaosoite + data[0].filename;
        });
    }

    getBusData () {   // haetaan
        this.http.get(this.busosoite).subscribe( data => {
           console.log(data);
        });
    }

    ngOnInit() {  // kutsutaan täällä metodeja
        this.getJson();
        this.getFromApi();
    }

}
