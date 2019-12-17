import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  private data;

  setData(data) {
    this.data = data;
  }

  getData() {
    let tmp = this.data;
    this.clearData();
    return tmp;
  }

  clearData() {
    this.data = undefined;
  }

  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/awesomes');
  }

  addProduct(product: Product) {
    return this.httpClient.post('http://localhost:3000/awesomes', product);
  }

  editProduct(product: Product) {
    return this.httpClient.put('http://localhost:3000/awesomes/', product);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete('http://localhost:3000/awesomes/' + id);
  }
}
