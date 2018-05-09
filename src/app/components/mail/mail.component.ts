import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../service/json-api.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [ JsonApiService ]
})
export class MailComponent implements OnInit {
   public allMails : any =[];
   public errorMsg ='';
	public showError : boolean = false;

  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.getMails();
  }

  getMails() {
  this.jsonApiService.getMails().subscribe((res) =>{
    this.allMails = res;
    console.log(this.allMails);
    this.showError = false;
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showError = true;
  })
}


}
