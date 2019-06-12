 import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import { Headers, RequestOptions } from '@angular/http';
 import "rxjs/Rx";
 import { Router } from '@angular/router';

 import {addbreed} from './models/addbreed';
 import {addfood} from './models/addfood';
 import { userlist } from 'app/models/userlist';

// import { ViewBreedsComponent } from './components/breeds/view-breeds/view-breeds.component';
import { viewbreed } from 'app/models/viewbreed';
import 'rxjs/add/operator/map';
import { addfoodproduct } from 'app/models/addfoodproduct';
import { addbreedcategory } from 'app/models/addbreedcategory';
import { addbodycondition } from 'app/models/addbodycondition';
import { addpet } from 'app/models/addpet';
import { addlifestyle } from 'app/models/addlifestyle';
import { addremainder } from 'app/models/addremainder';
import { listfoodcompany } from 'app/models/listfoodcompany';
import { listfoodproduct } from 'app/models/listfoodproduct';
import {listbreedcategory } from 'app/models/listbreedcategory';
import {listremaindertype } from 'app/models/listremaindertype';
import {listpettype } from 'app/models/listpettype';
import {listbodycondition } from 'app/models/listbodycondition';
import {listlifestyle } from 'app/models/listlifestyle';
import { updatefoodcompany } from 'app/models/updatefoodcompany';
import { updatefoodproduct } from 'app/models/updatefoodproduct';
import { updateremaindertype } from 'app/models/updateremaindertype';
import { updatepettype } from 'app/models/updatepettype';
import { updatebreedcategory } from 'app/models/updatebreedcategory';
import { updatebodycondition } from 'app/models/updatebodycondition';
import { updatelifestyle } from 'app/models/updatelifestyle';
import { deletepettype } from 'app/models/deletepettype';
import { deletelifestyle } from 'app/models/deletelifestyle';
import {deleteremainder } from 'app/models/deleteremainder';
import {deletebodycondition } from 'app/models/deletebodycondition';
import { deletelistfoodcompany } from 'app/models/deletelistfoodcompany';
import { deletelistfoodproduct } from 'app/models/deletelistfoodproduct';
import { deletetag } from 'app/models/deletetag';
import { deletetag1 } from 'app/models/deletetag1';
import { edittag } from 'app/models/edittag';
import {userview} from './models/userview';
import { invalid } from 'moment';
import { MatDialogRef, MatDialog } from '@angular/material';
import { login } from 'app/models/login';
import { checkuserlogin } from 'app/models/checkuserlogin';

import { userpetlist } from 'app/models/userpetlist';
import { userpetdetail } from 'app/models/userpetdetail';

import { graphdetail } from 'app/models/graphdetail';
import { synchistory } from 'app/models/synchistory';

import { aboutus } from 'app/models/aboutus';
import { privacypolices } from 'app/models/privacypolices';
import { termcondition } from 'app/models/termcondition';
import { updatepage } from 'app/models/updatepage';

import { notification } from 'app/models/notification';
import {temperamentlist} from 'app/models/temperamentlist';

@Injectable()
export class MyDataService {
    private _url: string = "http://18.218.139.76/poochplay-dev-v2/index.php"
    response: string[];
    private log: string = "assets/login.json"
    isInvalidLogin : any = {}
    constructor(private http: Http,private router: Router) { }


  fetchData(){
      return this.http.get(this.log).map((response:Response) => response.json()).subscribe((assets) => console.log(assets))
      
    }

                                /* Dashboard */

dashboard(data): Observable<any> {

  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Dashboard/dashboard',data,options).map((response: Response) => {
        response.json()
          return <any>response.json();
    })
  .catch(this.handleError);
}

                                    /* User Pet */

userpetlist(data): Observable<userpetlist> {

    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
        return this.http.post(this._url+'/Admin/User/listPet',data,options).map((response: Response) => {
          response.json()
            return <userpetlist>response.json();
        })
        .catch(this.handleError);
    }
edituserpetdetail(user_id: any): Observable<userpetdetail> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/User/detailPet',user_id,options)
        .map((response: Response) => {
          <userview>response.json()
            return <userpetdetail>response.json();
        })
        .catch(this.handleError);
    }  
 synchistory(user_id:any): Observable<synchistory>{
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Tracker/syncHistoryList',user_id,options)
      .map((response: Response) => {
        <synchistory>response.json()
          return <synchistory>response.json();
      })
      .catch(this.handleError);
 }
    
                                    /* User Pet Detail */

graphdetail(user_id: any): Observable<graphdetail> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Tracker/graphData',user_id,options)
        .map((response: Response) => {
          <graphdetail>response.json()
            return <graphdetail>response.json();
  })
    .catch(this.handleError);
  }  
                                      
                                      /* Login */

  
// login(data): Observable<login> {

// const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
//   const options = new RequestOptions({ headers: headers });
//      return this.http.post(this._url+'/Admin/Login/signIn',data,options).map((response: Response) => {
//         response.json()
//           return <login>response.json();
//       })
//     .catch(this.handleError);
//   }
  
checkuserlogin(data): Observable<checkuserlogin> {
const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
 const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Login/checkUserLogin',data,options).map((response: Response) => {
          response.json()
            return <checkuserlogin>response.json();
        })
        .catch(this.handleError);
 }
           
                                
                            /* User */
                            
userlist(data): Observable<userlist> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/User/UserList',data,options).map((response: Response) => {
        response.json()
            return <userlist>response.json();
         })
        .catch(this.handleError);
}
edituserview(user_id: any): Observable<userview> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this._url+'/Admin/User/UserDetail',user_id,options)
      .map((response: Response) => {
          <userview>response.json()
          return <userview>response.json();
      })
      .catch(this.handleError);
}

                          /* Breeds */

viewbreed(data): Observable<viewbreed> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Breed/listBreed',data,options).map((response: Response) => {
        response.json()
            return <viewbreed>response.json();
         })
        .catch(this.handleError);
}
listbreedcategory(data): Observable<listbreedcategory> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/listBreedCategory',data,options).map((response: Response) => {
        response.json()
            return <listbreedcategory>response.json();
         })
        .catch(this.handleError);
}

addbreed(data): Observable<addbreed> {
   const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
   const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Breed/addBreed',data,options).map((response: Response) => {
        response.json()
           return <addbreed>response.json();
         })
        .catch(this.handleError);


}
editbreed(breed_id: any): Observable<addbreed> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this._url+'/Admin/Breed/detailBreed',breed_id,options)
      .map((response: Response) => {
      <addbreed>response.json()
          return <addbreed>response.json();
      })
      .catch(this.handleError);
     
}
updatebreed(breed_id: any): Observable<addbreed> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this._url+'/Admin/Breed/updateBreed',breed_id,options)
      .map((response: Response) => {
          <addbreed>response.json()
          return <addbreed>response.json();
      })
      .catch(this.handleError);
     
}

updatebreedcategory(breed_category_id: any): Observable<updatebreedcategory> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this._url+'/Admin/Master/updateBreedCategory',breed_category_id,options)
      .map((response: Response) => {
          <updatebreedcategory>response.json()
          return <updatebreedcategory>response.json();
      })
      .catch(this.handleError);
     
}

addbreedcategory(data): Observable<addbreedcategory> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/addBreedCategory',data,options).map((response: Response) => {
        response.json()
            return <addbreedcategory>response.json();
         })
        .catch(this.handleError);
}
editbreedcategory(breed_category_id: any): Observable<addbreedcategory> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
  return this.http.post(this._url+'/Admin/Master/listBreedCategory',breed_category_id,options)
      .map((response: Response) => {
          <addbreedcategory>response.json()
          return <addbreedcategory>response.json();
      })
      .catch(this.handleError);
     
}
deletetag(breed_id: any): Observable<deletetag> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Breed/deleteBreed',breed_id,options).map((response: Response) => {
      response.json()
            return <deletetag>response.json();
         })
        .catch(this.handleError);
}
deletetag1(breed_category_id: any): Observable<deletetag1> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/deleteBreedCategory',breed_category_id,options).map((response: Response) => {
      response.json()
            return <deletetag1>response.json();
         })
        .catch(this.handleError);
}
                      
                                /* Foods */

addfoods(data): Observable<addfood> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/addFoodCompany',data,options).map((response: Response) => {
          response.json()
              return <addfood>response.json();
           })
          .catch(this.handleError);
  }
  addfoodproduct(data): Observable<addfoodproduct> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/addFoodProduct',data,options).map((response: Response) => {
          response.json()
              return <addfoodproduct>response.json();
           })
          .catch(this.handleError);
  }
  updatefoodcompany(data): Observable<updatefoodcompany> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/updateFoodCompany',data,options).map((response: Response) => {
          response.json()
              return <updatefoodcompany>response.json();
           })
          .catch(this.handleError);
  }
  updatefoodproduct(data): Observable<updatefoodproduct> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/updateFoodProduct',data,options).map((response: Response) => {
          response.json()
              return <updatefoodproduct>response.json();
           })
          .catch(this.handleError);
  }
  listfoodcompany(data): Observable<listfoodcompany> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/listFoodCompany',data,options).map((response: Response) => {
          response.json()
              return <listfoodcompany>response.json();
           })
          .catch(this.handleError);
  }
  listfoodproduct(data): Observable<listfoodproduct> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/listFoodProduct',data,options).map((response: Response) => {
          response.json()
              return <listfoodproduct>response.json();
           })
          .catch(this.handleError);
  }
  deletelistfoodcompany(company_id: any): Observable<deletelistfoodcompany> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/deleteFoodCompany',company_id,options).map((response: Response) => {
          response.json()
              return <deletelistfoodcompany>response.json();
           })
          .catch(this.handleError);
  }
  deletelistfoodproduct(product_id: any): Observable< deletelistfoodproduct> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Food/deleteFoodProduct',product_id,options).map((response: Response) => {
          response.json()
              return < deletelistfoodproduct>response.json();
           })
          .catch(this.handleError);
  }
  editfoodcompany(company_id: any): Observable<addfood>{
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Food/detailFoodCompany',company_id,options)
        .map((response: Response) => {
          <addfood>response.json()
            return <addfood>response.json();
        })
        .catch(this.handleError);
  }
  editfoodproduct(product_id: any): Observable<addfoodproduct>{
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Food/detailFoodProduct',product_id,options)
        .map((response: Response) => {
            <addfoodproduct>response.json()
            return <addfoodproduct>response.json();
        })
        .catch(this.handleError);
  }
  

                                      /* BodyConditions */

addbodycondition(data): Observable<addbodycondition> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/addBodyCondition',data,options).map((response: Response) => {
          response.json()
          return <addbodycondition>response.json();
               
           })
          .catch(this.handleError);
  }
 listbodycondition(data): Observable<listbodycondition> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/listBodyCondition',data,options).map((response: Response) => {
        response.json()
              return <listbodycondition>response.json();
           })
          .catch(this.handleError);
  }
  updatebodycondition(data): Observable<updatebodycondition> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/updateBodyCondition',data,options).map((response: Response) => {
          response.json()
              return <updatebodycondition>response.json();
           })
          .catch(this.handleError);
  }
  deletebodycondition(body_id: any): Observable<deletebodycondition> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/deleteBodyCondition',body_id,options).map((response: Response) => {
        response.json()
              return <deletebodycondition>response.json();
           })
          .catch(this.handleError);
  }
  editbodycondition(body_id: any): Observable<addbodycondition> 
  {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/listBodyCondition',body_id,options)
        .map((response: Response) => {
            console.log(<addbodycondition>response.json())
            return <addbodycondition>response.json();
        })
        .catch(this.handleError);
  }
  
                                                /* Pet */
  addpet(data): Observable<addpet> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/addPetType',data,options).map((response: Response) => {
          response.json()
              return <addpet>response.json();
           })
          .catch(this.handleError);
  }
  listpettype(data): Observable<listpettype> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/listPetType',data,options).map((response: Response) => {
          response.json()
              return <listpettype>response.json();
           })
          .catch(this.handleError);
  }
  updatepettype(data): Observable<updatepettype> {
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/updatePetType',data,options).map((response: Response) => {
          response.json()
              return <updatepettype>response.json();
           })
          .catch(this.handleError);
  }
  deletepettype(pet_type_id: any): Observable<deletepettype> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/deletePetType',pet_type_id,options).map((response: Response) => {
          response.json()
              return <deletepettype>response.json();
           })
          .catch(this.handleError);
  }
  editpettype(pet_type_id: any): Observable<addpet>{
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/listPetType',pet_type_id,options)
        .map((response: Response) => {
            <addpet>response.json()
            return <addpet>response.json();
        })
        .catch(this.handleError);
  }
                                    
                                            /* Remainder Type */

  addremainder(data): Observable<addremainder> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/addReminderType',data,options).map((response: Response) => {
          response.json()
              return <addremainder>response.json();
           })
          .catch(this.handleError);
  }
  listremaindertype(data): Observable<listremaindertype> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/listReminderType',data,options).map((response: Response) => {
          response.json()
              return < listremaindertype>response.json();
           })
          .catch(this.handleError);
  }
  updateremaindertype(data): Observable<updateremaindertype> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/updateReminderType',data,options).map((response: Response) => {
          response.json()
              return <updateremaindertype>response.json();
           })
          .catch(this.handleError);
  }
  deleteremainder(reminder_id: any): Observable<deleteremainder> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/deleteReminderType',reminder_id,options).map((response: Response) => {
      response.json()
              return <deleteremainder>response.json();
           })
          .catch(this.handleError);
  }
  editremaindertype(reminder_id: any): Observable<addremainder>{
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Master/listReminderType',reminder_id,options)
        .map((response: Response) => {
          <addremainder>response.json()
            return <addremainder>response.json();
        })
        .catch(this.handleError);
  }
                                                /* Notification */
  notification(data): Observable<any>{
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
        return this.http.post(this._url+'/Admin/UserNotification/notification',data,options)
          .map((response: Response) => {
            <notification>response.json()
              return <notification>response.json();
     })
   .catch(this.handleError);
  }
                                                                                                  


                                              /* Page */
  aboutus(data): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Page/aboutUs',data,options).map((response: Response) => {
      response.json()
      return <aboutus>response.json();
    })
    .catch(this.handleError);
}
  privacypolices(data): Observable<any> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Page/privacyPolicy',data,options).map((response: Response) => {
    response.json()
    return <privacypolices>response.json();
  })
  .catch(this.handleError);
 }
 termcondition(data): Observable<any> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Page/termsAndCondition',data,options).map((response: Response) => {
    response.json()
    return <termcondition>response.json();
  })
  .catch(this.handleError);
 }
 updatepage(data): Observable<any> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this._url+'/Admin/Page/updatePage',data,options).map((response: Response) => {
    response.json()
    return <updatepage>response.json();
  })
  .catch(this.handleError);
 }
  
                                            /* Life Style */                                                

   addlifestyle(data): Observable<addlifestyle> {
     const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     const options = new RequestOptions({ headers: headers });
     return this.http.post(this._url+'/Admin/Master/addLifestyle',data,options).map((response: Response) => {
     response.json()
     return <addlifestyle>response.json();
  })
  .catch(this.handleError);
}
                                     
      listlifestyle(data): Observable<listlifestyle> {
                                        
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
          return this.http.post(this._url+'/Admin/Master/listLifestyle',data,options).map((response: Response) => {
          response.json()
          return <listlifestyle>response.json();
      })
    .catch(this.handleError);
}
                                    
    updatelifestyle(data): Observable<updatelifestyle> {
                                        
       const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
          return this.http.post(this._url+'/Admin/Master/updateLifestyle',data,options).map((response: Response) => {
          response.json()
          return <updatelifestyle>response.json();
      })
    .catch(this.handleError);
}

    deletelifestyle(lifestyle_id: any): Observable<deletelifestyle> {
                                        
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
          return this.http.post(this._url+'/Admin/Master/deleteLifestyle',lifestyle_id,options).map((response: Response) => {
            response.json()
            return <deletelifestyle>response.json();
    })
  .catch(this.handleError);
}
    editlifestyle(lifestyle_id: any): Observable<addlifestyle>{
        
      const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
          return this.http.post(this._url+'/Admin/Master/listLifestyle',lifestyle_id,options)
          .map((response: Response) => {
          <addlifestyle>response.json()
          return <addlifestyle>response.json();
      })
   .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

                                   /* Temperament List */

temperamentlist(data): Observable<any> {
  const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
      return this.http.post(this._url+'/Admin/Master/temperamentList',data,options).map((response: Response) => {
        response.json()
        return <temperamentlist>response.json();
  })
  .catch(this.handleError);
}


                                             

}

                                      

  