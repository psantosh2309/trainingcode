import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  submitted = false;

  constructor(private _myFB:FormBuilder, private service: SampleService) { }

  
  loginForm = this._myFB.group({
    username : ['',[Validators.required,Validators.minLength(4)]],
    emailId :  ['',[Validators.required,Validators.email]],
    password :  ['',[Validators.required,Validators.minLength(8)]],
    mobileNo : ['',[Validators.required,Validators.minLength(10)]]
   });

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.loginForm.value);
    
    
    
  }

}






// if(this.loginForm.invalid){
//   return
// }

// alert("Success");




// loginForm = this._myFB.group({
  //  username : ['',Validators.required],
  //  emailId :  ['',Validators.required],
  //  mobileNo : ['',Validators.required]
  // });


  // loginForm = new FormGroup({
  //   username : new FormControl(''),
  //   emailId  : new FormControl(''),
  //   mobileNo : new FormControl('')
  // })
