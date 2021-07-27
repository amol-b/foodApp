import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgoList } from '../models/ngo-list.model';
import { ApiService } from './api.service';


@Injectable()
export class NgoListService {

  constructor(
    private apiService: ApiService,
  ) {}

  getNgoList(): Observable<NgoList[]> {
    const url = '/assets/json/ngo-list.json';
    return this.apiService.get(url);
  }
}
