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
  welcomeMessageFromService:string  

  constructor(
    private route: ActivatedRoute, 
    private service:WelcomeDataService) { }

  ngOnInit(){
    //console.log(this.message)
    this.name= this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
   // console.log("get welcome message")
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }
}
