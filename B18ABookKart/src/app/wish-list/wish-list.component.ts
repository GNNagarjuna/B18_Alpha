import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/wishlist.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  public wishListArray : any = [];
  public res: any;
  constructor(private wishListService : WishListService) { }

  ngOnInit(): void {
   this.getWishListItems();
  }

  getWishListItems(){
    this.wishListService.getWishListItems().subscribe((res: any)=>{
      this.wishListArray = res;
      console.log(res);
    })
  }
  removeItem(item: any){
    this.wishListService.addtowishlist(item).subscribe((res: any)=>{
      alert("item removed from cart")
      this.getWishListItems();
      this.wishListService.changeMessage(this.wishListArray.length-1);
      
    });
  }

  emptywishlist(){
    this.wishListService.removeAllwishlist().subscribe((res: any)=>{
      this.wishListArray.length = 0;
      console.log(this.wishListArray);
      console.log(res);
      this.wishListService.changeMessage(0);
    })
  }

}


function bookId(bookId: any) {
  throw new Error('Function not implemented.');
}

