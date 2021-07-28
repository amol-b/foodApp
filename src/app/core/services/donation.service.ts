import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private apiService: ApiService,) { }

  addDonation(payload) {
    const url = '/restaurants';
    return this.apiService.post(url, payload);
  }
}
