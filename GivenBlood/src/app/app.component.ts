import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // http = inject(HttpClient);

  // changeTitle() {
  //   this.title = "Nuria";
  // }

  // ngOnInit() { // useEffect
  //   this.http.get<Product>('https://api.escuelajs.co/api/v1/products')
  //     .subscribe((data: any) => {
  //       this.products = data;
  //     });
  // }

}
