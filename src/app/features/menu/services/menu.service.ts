import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../interfaces/Coffee';
import { baseUrl } from '../../../core/constant/baseUrl';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly _HttpClient = inject(HttpClient);

  getMenu(): Observable<Coffee[]> {
    return this._HttpClient.get<Coffee[]>(`${baseUrl}`);
  }
}
