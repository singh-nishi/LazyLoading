import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-model',
  templateUrl: './service-model.component.html',
  styleUrls: ['./service-model.component.css']
})
export class ServiceModelComponent implements OnInit {

  serviceModelVisible: boolean;
  ip: string = "fr.rancelab.com:6171";
  constructor(private router:Router) { }

  ngOnInit() {
    this.showpopup();
  }

  private showpopup() {
    this.serviceModelVisible = true;
  }

  private close() {
    this.serviceModelVisible = false;
    alert(this.ip);
    //route to login page by using concept of lazy loading
    this.router.navigate(['/login']);
  }

}
