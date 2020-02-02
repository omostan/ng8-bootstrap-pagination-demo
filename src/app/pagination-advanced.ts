import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-pagination-advanced',
  templateUrl: './pagination-advanced.html'
})
export class NgbdPaginationAdvanced {
  currentPage = 1;
  data = [];

  ngOnInit() {
    this.dataCollection()
  }

  dataCollection() {
    for (let i = 0; i < 1000; i++) {
      let item = "Item" + i;
      this.data.push(item);
    }
    //console.log(this.data);
  }
}
