import { Component, OnInit } from '@angular/core';
import {TermekService} from "../../shared/services/termek.service";
import {ProductService} from "../../shared/services/product.service";
import {KosarService} from "../../shared/services/kosar.service";
import {RatingService} from "../../shared/services/rating.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  user$ = this.authS.currentUser$;

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
  products26: any[] | undefined;
  products27: any[] | undefined;
  products28: any[] | undefined;
  selectedProductId: number | undefined;
  showProducts: boolean | undefined;
  quantity: any = 0;
  cart: { product: any, quantity: number }[] = [];
  quantity1: any = 0;
  quantity2: any = 0;
  cartItems: any[] = [];
  quantity3: any = 0;
  quantity4: any = 0;
  quantity5: any = 0;
  quantity6: any = 0;
  quantity7: any = 0;
  quantity8: any = 0;
  quantity9: any = 0;
  quantity10: any = 0;
  quantity11: any = 0;
  quantity12: any = 0;
  quantity13: any = 0;
  quantity14: any = 0;
  quantity15: any = 0;
  quantity16: any = 0;
  quantity17: any = 0;
  quantity18: any = 0;
  quantity19: any = 0;
  quantity22: any = 0;
  quantity23: any = 0;
  quantity24: any = 0;
  quantity25: any = 0;
  quantity26: any = 0;
  quantity27: any = 0;
  quantity28: any = 0;
  rate: number = 0;
  rate2: number = 0;
  rate3: number = 0;
  rate4: number = 0;
  rate5: number = 0;
  rate6: number = 0;
  rate7: number = 0;
  rate8: number = 0;
  rate11: number = 0;
  rate9: number = 0;
  rate10: number = 0;
  rate12: number = 0;
  rate13: number = 0;
  rate14: number = 0;
  rate15: number = 0;
  rate16: number = 0;
  rate17: number = 0;
  rate18: number = 0;
  rate19: number = 0;
  rate20: number = 0;
  rate21: number = 0;
  rate22: number = 0;
  rate23: number = 0;
  rate24: number = 0;
  rate25: number = 0;
  rate26: number = 0;
  rate27: number = 0;
  rate28: number = 0;

  constructor(private termekService: TermekService,private productService: ProductService,private cartService: KosarService,private rating: RatingService,private authS: AuthService) { }

  ngOnInit() {
    this.termekService.getProductsByCategory("Számítógép alkatrész").subscribe(products => {
      this.products9 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész2").subscribe(products => {
      this.products10 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész3").subscribe(products => {
      this.products11 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész4").subscribe(products => {
      this.products12 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész1").subscribe(products => {
      this.products = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria").subscribe(products => {
      this.products2 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria1").subscribe(products => {
      this.products26 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria2").subscribe(products => {
      this.products27 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria3").subscribe(products => {
      this.products28 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika").subscribe(products => {
      this.products3 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika1").subscribe(products => {
      this.products23 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika2").subscribe(products => {
      this.products24 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor").subscribe(products => {
      this.products4 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor1").subscribe(products => {
      this.products21 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor2").subscribe(products => {
      this.products22 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera").subscribe(products => {
      this.products5 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera1").subscribe(products => {
      this.products19 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera2").subscribe(products => {
      this.products20 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz").subscribe(products => {
      this.products6 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz1").subscribe(products => {
      this.products17 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz2").subscribe(products => {
      this.products18 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon").subscribe(products => {
      this.products7 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon1").subscribe(products => {
      this.products15 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon2").subscribe(products => {
      this.products16 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok").subscribe(products => {
      this.products8 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok1").subscribe(products => {
      this.products13 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok2").subscribe(products => {
      this.products14 = products;
    });

    this.selectedProductId = this.productService.getSelectedProductId();
    this.showProducts = this.productService.getShowProducts();

    this.rating.getAverageRating('ugfsugzfdshuiogdfshis').subscribe(rater =>
    {
      console.log(rater)
      this.rate = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('asdasdasd').subscribe(rater =>
    {
      console.log(rater)
      this.rate2 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('isdfhuisdhuifhiushiu').subscribe(rater =>
    {
      console.log(rater)
      this.rate3 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('jidfijfdjikjkdfklsdfklslkssssss').subscribe(rater =>
    {
      console.log(rater)
      this.rate4 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('sdfjhghfdshjgfdhjokssfdsaaaaa').subscribe(rater =>
    {
      console.log(rater)
      this.rate5 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('bhdsafihudsiafi').subscribe(rater =>
    {
      console.log(rater)
      this.rate6 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('urehuituireiujnoengr').subscribe(rater =>
    {
      console.log(rater)
      this.rate7 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('fgdfsgdfsgvvvvvv').subscribe(rater =>
    {
      console.log(rater)
      this.rate8 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('asdjihfjasdhbj').subscribe(rater =>
    {
      console.log(rater)
      this.rate9 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('ztustzhsidtista').subscribe(rater =>
    {
      console.log(rater)
      this.rate10 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('iasioasdhiofasduio').subscribe(rater =>
    {
      console.log(rater)
      this.rate11 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('iksdfjkgdfojkgdfsjpkle').subscribe(rater =>
    {
      console.log(rater)
      this.rate12 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('fdsgdfshgjdsfgjkds').subscribe(rater =>
    {
      console.log(rater)
      this.rate13 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('werzhuhtirwehuirwhier').subscribe(rater =>
    {
      console.log(rater)
      this.rate14 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('zuuziweiuhirweihrwei').subscribe(rater =>
    {
      console.log(rater)
      this.rate15 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('fsadfsadaasddafsdvc').subscribe(rater =>
    {
      console.log(rater)
      this.rate16 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('bdfggdfvbdfvsdsfafa').subscribe(rater =>
    {
      console.log(rater)
      this.rate17 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('bsuihfiksdnfsdiofjns').subscribe(rater =>
    {
      console.log(rater)
      this.rate18 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('sssssssssssssss').subscribe(rater =>
    {
      console.log(rater)
      this.rate19 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('uhrsgzhudthbjrebt').subscribe(rater =>
    {
      console.log(rater)
      this.rate20 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('qqqqqqqqqqqqqqqqqq').subscribe(rater =>
    {
      console.log(rater)
      this.rate21 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('kjdfjikdfshjnhjsfdhjik').subscribe(rater =>
    {
      console.log(rater)
      this.rate22 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('erztebujhbrejbt').subscribe(rater =>
    {
      console.log(rater)
      this.rate23 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('ndfnbgnbdfgzhdofij').subscribe(rater =>
    {
      console.log(rater)
      this.rate24 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('dsdfsdsvfsdvdsfvsdfgdfsgsdfg').subscribe(rater =>
    {
      console.log(rater)
      this.rate25 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('eruhtuhbrehbterhb').subscribe(rater =>
    {
      console.log(rater)
      this.rate26 = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('quzzhreqhuirhuiqwerewr').subscribe(rater =>
    {
      console.log(rater)
      this.rate27 = rater;
    },error => {
      console.error(error)
    })

  }

  addToCart(product: any, quantity: number) {
    if(this.user$ !== null){
      this.cartService.addToCart(product, quantity);
      console.log("működik");
    }

  }



}
