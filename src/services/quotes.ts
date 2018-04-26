import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote)
    {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote)
    {
        const pos = this.favoriteQuotes.findIndex((quoteElement) => {
            return quoteElement.id == quote.id;
        });
        this.favoriteQuotes.splice(pos, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote){
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });

    }
}