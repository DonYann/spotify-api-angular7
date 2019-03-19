import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQDx3hyzD8GstssGXCLF0EjPd9kZpmdPjvyr9Yqpfb4OBbUtauxAxaJr7voD5h2easImPdFR9I8pdlwaegzRkKrh0z418u_5tjZtYN6RAfDs6l2GcnVoBMYDks4TpR1eHS6cHmVNq6pHZzvTHjJDirdHVef9dv6S1Sz-dBdC-F_uIkSEmMQuxPGGkVuzr6XyC7N8uDsYJAOvjpor6pMXdl0wr2TZlkprYbXvJCc839zESMiXbMFrR45c7reEcFrFbyfvo-wthB65ck-rmlSM1mo7AswH2708pHk');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}

