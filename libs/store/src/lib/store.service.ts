import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private userName: string | null  = '';

  getUserName(): string | null {
    return this.userName;
  }

  setUserName(userName = 'Sathish') {
    this.userName = userName
  }
}
