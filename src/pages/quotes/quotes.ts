import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService
  
  ) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad QuotesPage');

  //   this.quoteGroup = this.navParams.data;
  // }

  ngOnInit()
  {
    this.quoteGroup = this.navParams.data;
  }

  onAddFavorite(quote: Quote)
  {
    const alert = this.alertCtrl.create(
      {
        title: 'Add Quote',
        subTitle: 'Are you sure?',
        message: 'Are you sure you want to add the quote?',
        buttons: [
          {
            text: 'Yes, go ahead',
            handler: () => {
              this.quoteService.addQuoteToFavorites(quote);
            }
          },
          {
            text: 'No I changed my mind',
            role: 'cancel',
            handler: () => {
              console.log('No')
            }
          },
        ]
      }
    );

    alert.present();

  }

  onUnfavorite(quote){
    this.quoteService.removeQuoteFromFavorites(quote);

  }

  isFavorite(quote: Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }



}
