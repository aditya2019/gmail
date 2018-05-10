import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
  public selectedmail : any=[];
  constructor(private jsonApiService: JsonApiService,private router: Router) { }

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

maildetails(mail)
{
  this.selectedmail=mail;
  this.router.navigate(['/showmail']);
}

}
