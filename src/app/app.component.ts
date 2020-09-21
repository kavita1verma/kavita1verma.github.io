import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rev';

  launches;
  constructor(private httpclientobj: HttpClient) { 
    // this process is called dependency injection


  }
  ngOnInit() {
    let url = 'https://api.spacexdata.com/v3/launches?limit=100';
    //let url = 'assets/data/comments.json';
    this.httpclientobj.get(url).subscribe( (res)=> {  // res is a variable this will store url 500 data
       this.launches = res;
       console.log(this.launches);
    });  
    
   }
   filter_success_launch(years){
    let url = 'https://api.spacexdata.com/v3/launches?limit=100&launch_year=' + years;
    //let url = 'assets/data/comments.json';
    this.httpclientobj.get(url).subscribe( (res)=> {  // res is a variable this will store url 500 data
       this.launches = res;
       console.log(this.launches);
    });  
   }
   succ_launch(succ_launch){
    let url = 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=' + succ_launch;
    //let url = 'assets/data/comments.json';
    this.httpclientobj.get(url).subscribe( (res)=> {  // res is a variable this will store url 500 data
       this.launches = res;
       console.log(this.launches);
    });  
   }
   succ_landing(succ_lan){
    let url = 'https://api.spacexdata.com/v3/launches?limit=100&land_success='+ succ_lan ;
    //let url = 'assets/data/comments.json';
    this.httpclientobj.get(url).subscribe( (res)=> {  // res is a variable this will store url 500 data
       this.launches = res;
       console.log(this.launches);
    });  
   }
}
