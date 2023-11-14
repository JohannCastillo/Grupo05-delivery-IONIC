import { Token } from './../models/token';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Horario } from '../models/horario';
import { Client } from '../models/client';
import { Plato } from '../models/platos';
import { Menu } from '../models/menu';
import { Detalle } from '../models/detalle';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';
import { Pedidodetalle } from '../models/pedidodetalle';
import { Delivery } from '../models/delivery';
import { Deliveryubicacion } from '../models/deliveryubicacion';
import { platos, horario, menu, detalle, productos } from '../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders();

  constructor(private httpClient : HttpClient) { 
    this.headers.append("Accept", '*');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  options = {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : '*',
      'Access-Control-Allow-Origin' : '*',
      'X-Requested-With' : 'XMLHttpRequest'
    }
  }

  PHP_API_SERVER = "https://slottest.000webhostapp.com/API_REST_ALMULINE";
  //PHP_API_SERVER = "http://192.168.0.13/API_REST_ALMULINE";

  readHorario() : Observable<Horario[]>{
    return of(horario)
  }

  readClient() : Observable<Client[]>{
    const client: Client[] = [
      {
        idcliente: 1,
        nombrecliente: 'Grupo 5',
        celular: 123456789,
        direccion: 'Calle 1',
        latitud: 0,
        longitud: 0,
        referencia: 'Casa'
      }
    ]
    return of(client)
  }

  readPlatos() : Observable<Plato[]>{
    return of(platos)
  }

  readMenu() : Observable<Menu[]>{
    return of(menu)
  }

  readDetalle() : Observable<Detalle[]>{
    return of(detalle)
  }

  readProducto() : Observable<Producto[]>{
    return of(productos)
  }
  
  readPedido() : Observable<Pedido[]>{
    const pedidos: Pedido[] = [
      {
        idpedido: 1,
        idcliente: 1,
        idprodmenu: 1,
        estado: 'Pendiente',
        fechapedido: '2020-01-01',
        horapedido: '00:00',
        usuadd: 1
      }
    ]
    return of(pedidos)
  }

  readToken() : Observable<Token[]>{
    return this.httpClient.get<Token[]>(`${this.PHP_API_SERVER}/token/read.php`);
  }

  readDelivery() : Observable<Delivery[]>{
    const delivery: Delivery[] = [
      {
        iddeliv: 1,
        idpedido: 1,
        estado: 'Pendiente',
        fechahoraenviado: '2020-01-01',
        direccionentrega: 'Calle 1',
        latitudentrega: 0,
        longitudentrega: 0,
        cirepartidor: '12345678',
        fechahoraentregado: '2020-01-01',
        fechahorarecogido: '2020-01-01',
      }
    ]
    return of(delivery)
  }

  readDeliveryUbicacion () : Observable<Deliveryubicacion[]>{
    return this.httpClient.get<Deliveryubicacion[]>(`${this.PHP_API_SERVER}/deliveryubicacion/read.php`);
  }

  createClient(cliente: Client) : Observable<Client>{
    return this.httpClient.post<Client>(`${this.PHP_API_SERVER}/client/create.php`, cliente);
  }

  createPedido(pedido : Pedido) : Observable<Pedido>{
    return this.httpClient.post<Pedido>(`${this.PHP_API_SERVER}/pedidos/create.php`, pedido);
  }

  createPedidoDetalle(pedidoDetalle : Pedidodetalle) : Observable<Pedidodetalle>{
    return this.httpClient.post<Pedidodetalle>(`${this.PHP_API_SERVER}/pedidodetalle/create.php`, pedidoDetalle);
  }

  createToken(token : Token) : Observable<Token>{
    return this.httpClient.post<Token>(`${this.PHP_API_SERVER}/token/create.php`, token);
  }

  updateClient(cliente: Client){
    return this.httpClient.put<Client>(`${this.PHP_API_SERVER}/client/update.php`, cliente);
  }

  updateMenu(menu: Menu){
    return this.httpClient.put<Menu>(`${this.PHP_API_SERVER}/menu/update.php`, menu);
  }

  deleteToken(id: number){
    return this.httpClient.delete<Token>(`${this.PHP_API_SERVER}/token/delete.php/?id=${id}`);
  }
}
