import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotesPage } from '../quotes/quotes';
import { QuotePage } from '../quote/quote';
import { LibraryPage } from '../library/library';
import { SettingService } from '../../services/settings';



@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  altViewIsSet: boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private quoteService: QuotesService ,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,  
    private settingService: SettingService
  ) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
    this.altViewIsSet = this.settingService.isAltViewSet();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove) => {
      if(remove){
        this.onRemoveFromFavorites(quote);
      }      
    });

    
  }

  onRemoveFromFavorites(quote){
      this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onOpenMenu(){
    this.menuCtrl.open();
  }

  getBackground()
  {
    return this.settingService.isAltViewSet() ? 'altQuoteBackground' : 'quoteBackground'; 
  }

}
