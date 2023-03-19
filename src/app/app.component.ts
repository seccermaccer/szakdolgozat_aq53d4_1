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
  products2: any[] | undefined;
  products3: any[] | undefined;
  products4: any[] | undefined;
  products5: any[] | undefined;
  products6: any[] | undefined;
  products7: any[] | undefined;
  products8: any[] | undefined;
  products9: any[] | undefined;
  products10: any[] | undefined;
  products11: any[] | undefined;
  products12: any[] | undefined;
  products13: any[] | undefined;
  products14: any[] | undefined;
  products15: any[] | undefined;
  products16: any[] | undefined;
  products17: any[] | undefined;
  products18: any[] | undefined;
  products19: any[] | undefined;
  products20: any[] | undefined;
  products21: any[] | undefined;
  products22: any[] | undefined;
  products23: any[] | undefined;
  products24: any[] | undefined;
  products25: any[] | undefined;
  products26: any[] | undefined;
  products27: any[] | undefined;
  products28: any[] | undefined;
  products29: any[] | undefined;
  products30: any[] | undefined;
  products31: any[] | undefined;
  products32: any[] | undefined;
  products33: any[] | undefined;
  products34: any[] | undefined;
  products35: any[] | undefined;
  products36: any[] | undefined;
  products37: any[] | undefined;
  products38: any[] | undefined;
  products39: any[] | undefined;
  products40: any[] | undefined;
  products41: any[] | undefined;
  products42: any[] | undefined;
  products43: any[] | undefined;
  products44: any[] | undefined;
  products45: any[] | undefined;
  products46: any[] | undefined;
  products47: any[] | undefined;
  products48: any[] | undefined;
  products49: any[] | undefined;
  products50: any[] | undefined;
  products51: any[] | undefined;
  products52: any[] | undefined;
  products53: any[] | undefined;
  products54: any[] | undefined;
  searchText2: string | null;
  title = 'my-app';

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
    this.keresesS.searchProducts2(searchText).subscribe((data) => {
      this.products2 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts3(searchText).subscribe((data) => {
      this.products3 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts4(searchText).subscribe((data) => {
      this.products4 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts5(searchText).subscribe((data) => {
      this.products5 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts6(searchText).subscribe((data) => {
      this.products6 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts7(searchText).subscribe((data) => {
      this.products7 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts8(searchText).subscribe((data) => {
      this.products8 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts9(searchText).subscribe((data) => {
      this.products9 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts10(searchText).subscribe((data) => {
      this.products10 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts11(searchText).subscribe((data) => {
      this.products11 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts12(searchText).subscribe((data) => {
      this.products12 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts13(searchText).subscribe((data) => {
      this.products13 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts14(searchText).subscribe((data) => {
      this.products14 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts15(searchText).subscribe((data) => {
      this.products15 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts16(searchText).subscribe((data) => {
      this.products16 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts17(searchText).subscribe((data) => {
      this.products17 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts18(searchText).subscribe((data) => {
      this.products18 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts19(searchText).subscribe((data) => {
      this.products19 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts20(searchText).subscribe((data) => {
      this.products20 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts21(searchText).subscribe((data) => {
      this.products21 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts22(searchText).subscribe((data) => {
      this.products22 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts23(searchText).subscribe((data) => {
      this.products23 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts24(searchText).subscribe((data) => {
      this.products24 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts25(searchText).subscribe((data) => {
      this.products25 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts26(searchText).subscribe((data) => {
      this.products26 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts27(searchText).subscribe((data) => {
      this.products27 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts28(searchText).subscribe((data) => {
      this.products28 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts29(searchText).subscribe((data) => {
      this.products29 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });
    this.keresesS.searchProducts30(searchText).subscribe((data) => {
      this.products30 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts31(searchText).subscribe((data) => {
      this.products31 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts32(searchText).subscribe((data) => {
      this.products32 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts33(searchText).subscribe((data) => {
      this.products33 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts34(searchText).subscribe((data) => {
      this.products34 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts35(searchText).subscribe((data) => {
      this.products35 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts36(searchText).subscribe((data) => {
      this.products36 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts37(searchText).subscribe((data) => {
      this.products37 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts38(searchText).subscribe((data) => {
      this.products38 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    })

    this.keresesS.searchProducts39(searchText).subscribe((data) => {
      this.products39 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts40(searchText).subscribe((data) => {
      this.products40 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts41(searchText).subscribe((data) => {
      this.products41 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts42(searchText).subscribe((data) => {
      this.products42 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts43(searchText).subscribe((data) => {
      this.products43 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts44(searchText).subscribe((data) => {
      this.products44 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts45(searchText).subscribe((data) => {
      this.products45 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts46(searchText).subscribe((data) => {
      this.products46 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts47(searchText).subscribe((data) => {
      this.products47 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts48(searchText).subscribe((data) => {
      this.products48 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts49(searchText).subscribe((data) => {
      this.products49 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts50(searchText).subscribe((data) => {
      this.products50 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts51(searchText).subscribe((data) => {
      this.products51 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts52(searchText).subscribe((data) => {
      this.products52 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts53(searchText).subscribe((data) => {
      this.products53 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });

    this.keresesS.searchProducts54(searchText).subscribe((data) => {
      this.products54 = data;
      this.router.navigate(['/kereses'], { queryParams: { q: searchText } });
    });




  }
}
