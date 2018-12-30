import { OrderLine } from './orderLine';
export class Order {

    public idOrder: number;
    public fecha: string;
    public id_cliente: number;
    public orderLine: any[];
    public observacion: string;

    constructor(idOrder: number, fecha: string, id_cliente: number, orderline: any, observacion: string) {
        this.idOrder = idOrder;
        this.fecha = fecha;
        this.id_cliente = id_cliente;
        this.orderLine = orderline;
        this.observacion = observacion;
    }
}
