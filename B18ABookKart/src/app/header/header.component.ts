import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public res: any;

  constructor(private wishlistService : WishListService) {
    this.wishlistService.messageChanges$.subscribe((count: number) => {
      this.totalItem = count;
    });
   }

  ngOnInit(): void {
    this.wishlistService.getWishListItems().subscribe((res: any)=>{
      this.totalItem = res.length;
  
    })

  }

}
