import { Component } from '@angular/core';
// import { OAuthService } from './../services/o-auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent  {
  cookieValue:object;
  public disabled = false;

  public status: {isopen: boolean} = {isopen: false};
  constructor(private cookieService: CookieService,private router:Router) {
  
}
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);

  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  logout() {
    // alert(1234)
    // this.cookieValue= JSON.parse(this.cookieService.get('appCookie'));
    //     console.log(this.cookieValue);
    this.cookieService.delete('appCookie');
    console.log(this.cookieService.get('appCookie'));
    this.router.navigate(['login']);
  }
        
   
    
  //   console.log("console");

//     this.oAuthService.logout();
// }
//  ngOnInit(){

// }
}
