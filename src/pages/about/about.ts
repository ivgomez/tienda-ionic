import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  productosMasVendidos=[];

  constructor(
    public navCtrl: NavController,
    private servicioProductos:ProductoProvider
  ) {

  }
  ionViewDidLoad(){
      this.servicioProductos.obtenerProductos()
      .subscribe((productos:any[]) => {
        //this.productosMasVendidos = productos.filter(producto => producto.bestSeller == true);
        this.productosMasVendidos = productos.filter(producto => producto.bestSeller);
        console.log(this.productosMasVendidos);
      });
  }

}
