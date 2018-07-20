import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-producto',
  templateUrl: 'detalle-producto.html',
})
export class DetalleProductoPage {

  producto = {};
  constructor(public navCtrl: NavController, public navParams: NavParams /*obtiene parametros*/) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetalleProductoPage');
    //let producto = this.navParams.get("miProducto");
    //console.log(producto);
    this.producto = this.navParams.get("miProducto");
  }

}
