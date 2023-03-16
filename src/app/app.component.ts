import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {SearchService} from "./shared/services/search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  loggedInUser?: firebase.default.User | null;
  searchTerm!: string;
  products: any[] | undefined;
  searchText2: string | null;

  constructor(public authService: AuthService,private router: Router,private keresesS: SearchService) {
    this.searchText2 = null;
    this.searchTerm = '';
  }

  ngOnInit(): void {
       this.authService.isUserLoggedIn().subscribe(user => {
         console.log(user);
         this.loggedInUser = user;
         localStorage.setItem('user',JSON.stringify(this.loggedInUser));

       },error => {
         console.error(error);
         localStorage.setItem('user',JSON.stringify(null));
       });
    }

  logout(){
    this.authService.logout().then(() => {
      console.log('Sikeres kilépés.')
      this.router.navigate(['fooldal'])
    }).catch(error => {
      console.error(error);
    });
  }

  // search() {
  //   this.keresesS.getProducts().subscribe((products) => {
  //     this.products = products.filter((product: { productName15: string; }) => {
  //       this.router.navigate(['/kereses'], { queryParams: { q: this.searchTerm } });
  //       return product.productName15.toLowerCase().includes(this.searchTerm.toLowerCase());
  //
  //     });
  //   });
  //
  //
  // }

  // search() {
  //   this.keresesS.searchProducts('AGFAPHOTO Realimove CC2700 videókamera')
  //     .subscribe((data) => {
  //       this.products = data;
  //       console.log(data)
  //       this.router.navigate(['/kereses'], { queryParams: { q: this.searchText } });
  //     });
  // }

  search() {
    const searchText = this.searchTerm;
    this.keresesS.searchProducts(searchText)
      .subscribe((data) => {
        this.products = data;
        this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
      });
  }
}
