import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DonationlistService {

  constructor(private apiService: ApiService,) { }

  getAllDonations() {
    const url = '/restaurants';
    return this.apiService.get(url);
  }
}
