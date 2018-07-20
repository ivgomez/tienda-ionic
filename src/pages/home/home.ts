import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { DetalleProductoPage } from '../detalle-producto/detalle-producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos= [];
  constructor(
    public navCtrl: NavController,
    private servicioProductos: ProductoProvider
  ) {

  }
    ionViewDidLoad(){
      /* se cargan los productos aca debido a que es una petición http*/
      this.servicioProductos.obtenerProductos() //es un servicio observable (http get)
      .subscribe(
        (data: any[]) => {
        this.productos = data;
        console.log(data)
      }
    ); 
    }

    irPaginaDetalleProducto(producto){
      this.navCtrl.push(DetalleProductoPage, {
        miProducto: producto
      });
    }
}
