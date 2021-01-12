import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name= ''
  message = 'some welcome message'

  constructor(
    private route: ActivatedRoute, 
    private service:WelcomeDataService) { }

  ngOnInit(){
    //console.log(this.message)
    this.name= this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService();
   // console.log("get welcome message")
  }
}
