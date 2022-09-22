import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '@mf/store';

@Component({
  selector: 'mf-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css'],
})
export class AbcComponent implements OnInit {
  constructor(private router: Router, private storeService: StoreService) {}

  ngOnInit(): void {
    console.log(this.router)
    console.log(`abc ${this.storeService.getUserName()}`)
  }

  getStore() {
    console.log(this.storeService)
  }

  setStore() {
    this.storeService.setUserName(<any>Date.now())
  }
}
