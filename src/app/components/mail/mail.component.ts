import { Component,ViewContainerRef , OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JsonApiService } from './../../service/json-api.service';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [ JsonApiService ]
})
export class MailComponent implements OnInit {
  // @Output()
  // selectedmail : EventEmitter<any> = new EventEmitter();

   public allMails : any =[];
   public errorMsg ='';
	public showError : boolean = false;
  public value : boolean = false;
  public deleteidmail : any =[];
//  public selectedmail : any=[];
  constructor(private jsonApiService: JsonApiService,private router: Router,private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.getMails();
  }

  test()
  {
      this.toastr.success('You are awesome!', 'Success!');
      console.log("hello toster");
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

check()
{
  if(this.value==false)
  {
  this.value=true;
  console.log(this.value);
  console.log("heloo");
   }
   else
   {
   this.value=false;
   console.log(this.value);
   console.log("heloo");
    }
}

reload()
{
  this.jsonApiService.getMails().subscribe((res) =>{
    this.value=false;
    this.allMails = res;
    console.log(this.allMails);
    this.showError = false;
  },(error:any)=>{
    this.errorMsg = error.statusText;
    this.showError = true;
  })
}


deleteitems(mailId)
{
  this.deleteidmail=mailId;
  console.log(this.deleteidmail);

}
// this is test

// delete the mails
deleteMail()
{
  this.jsonApiService.deleteMail(this.deleteidmail).subscribe(data=>{
    this.getMailafterdelete();
        },(error:any)=>{
          console.log(error)
        })
}
getMailafterdelete() {
    this.jsonApiService.getMails().subscribe((res) =>{
    this.allMails = res;
  //  this.showError = false;
    },(error:any)=>{
    // this.errorMsg = error._body;
    // this.showError = true;
    })
  }

maildetails()
{
  //this.selectedmail=mail;
  // this.selectedmail.emit(mail);

  //this.router.navigate(['/showmail']);
}

}
