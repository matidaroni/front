export class OrderLine {

    public idOrderLine: number;
    public cantidad: number;
    public id_order: number;
    public id_articulo: number;

    constructor(idOrderLine: number, cantidad: number, id_order: number, id_articulo: number) {
        this.idOrderLine = idOrderLine;
        this.cantidad = cantidad;
        this.id_order = id_order;
        this.id_articulo = id_articulo;
    }
}
