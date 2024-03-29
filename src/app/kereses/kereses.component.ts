import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../shared/services/search.service";
import {KosarService} from "../shared/services/kosar.service";
import {RatingService} from "../shared/services/rating.service";

@Component({
  selector: 'app-kereses',
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.scss']
})
export class KeresesComponent implements OnInit {

  searchText = '';
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
  quantity: number = 0;
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

  constructor(private route: ActivatedRoute,private keresesS: SearchService,private cartService: KosarService,private rating: RatingService) {
    this.route.queryParams.subscribe(params => {
      const searchText = params['q'];
      this.keresesS.searchProducts(searchText)
        .subscribe((data) => {
          this.products = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts2(searchText)
        .subscribe((data) => {
          this.products2 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts3(searchText)
        .subscribe((data) => {
          this.products3 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts4(searchText)
        .subscribe((data) => {
          this.products4 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts5(searchText)
        .subscribe((data) => {
          this.products5 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts6(searchText)
        .subscribe((data) => {
          this.products6 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts7(searchText)
        .subscribe((data) => {
          this.products7 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts8(searchText)
        .subscribe((data) => {
          this.products8 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts9(searchText)
        .subscribe((data) => {
          this.products9 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts10(searchText)
        .subscribe((data) => {
          this.products10 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts11(searchText)
        .subscribe((data) => {
          this.products11 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts12(searchText)
        .subscribe((data) => {
          this.products12 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts13(searchText)
        .subscribe((data) => {
          this.products13 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts14(searchText)
        .subscribe((data) => {
          this.products14 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts15(searchText)
        .subscribe((data) => {
          this.products15 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts16(searchText)
        .subscribe((data) => {
          this.products16 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts17(searchText)
        .subscribe((data) => {
          this.products17 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts18(searchText)
        .subscribe((data) => {
          this.products18 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts19(searchText)
        .subscribe((data) => {
          this.products19 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts20(searchText)
        .subscribe((data) => {
          this.products20 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts21(searchText)
        .subscribe((data) => {
          this.products21 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts22(searchText)
        .subscribe((data) => {
          this.products22 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts23(searchText)
        .subscribe((data) => {
          this.products23 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts24(searchText)
        .subscribe((data) => {
          this.products24 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts25(searchText)
        .subscribe((data) => {
          this.products25 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts26(searchText)
        .subscribe((data) => {
          this.products26 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts27(searchText)
        .subscribe((data) => {
          this.products27 = data;
          this.searchText = searchText;
        });


      this.keresesS.searchProducts28(searchText)
        .subscribe((data) => {
          this.products28 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts29(searchText)
        .subscribe((data) => {
          this.products29 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts30(searchText)
        .subscribe((data) => {
          this.products30 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts31(searchText)
        .subscribe((data) => {
          this.products31 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts32(searchText)
        .subscribe((data) => {
          this.products32 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts33(searchText)
        .subscribe((data) => {
          this.products33 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts34(searchText)
        .subscribe((data) => {
          this.products34 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts35(searchText)
        .subscribe((data) => {
          this.products35 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts36(searchText)
        .subscribe((data) => {
          this.products36 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts37(searchText)
        .subscribe((data) => {
          this.products37 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts38(searchText)
        .subscribe((data) => {
          this.products38 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts39(searchText)
        .subscribe((data) => {
          this.products39 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts40(searchText)
        .subscribe((data) => {
          this.products40 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts41(searchText)
        .subscribe((data) => {
          this.products41 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts42(searchText)
        .subscribe((data) => {
          this.products42 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts43(searchText)
        .subscribe((data) => {
          this.products43 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts44(searchText)
        .subscribe((data) => {
          this.products44 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts45(searchText)
        .subscribe((data) => {
          this.products45 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts46(searchText)
        .subscribe((data) => {
          this.products46 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts47(searchText)
        .subscribe((data) => {
          this.products47 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts48(searchText)
        .subscribe((data) => {
          this.products48 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts49(searchText)
        .subscribe((data) => {
          this.products49 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts50(searchText)
        .subscribe((data) => {
          this.products50 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts51(searchText)
        .subscribe((data) => {
          this.products51 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts52(searchText)
        .subscribe((data) => {
          this.products52 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts53(searchText)
        .subscribe((data) => {
          this.products53 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts54(searchText)
        .subscribe((data) => {
          this.products54 = data;
          this.searchText = searchText;
        });




    });


  }

  ngOnInit(): void {
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
    this.cartService.addToCart(product, quantity);
    console.log("működik");
  }

}
