export class Articulo {

    public codArticulo: number;
    public cod_proveedor: number;
    public descripcion: string;
    public costo: number;
    public flete: number;
    public incremento: number;
    public stock: number;
    public imagen: string;
    public ganancia: number;
    // public precio: number;

    constructor(codArticulo: number, cod_proveedor: number, descripcion: string, costo: number, flete: number,
                incremento: number, stock: number, imagen: string, ganancia: number) {

        this.codArticulo = codArticulo;
        this.cod_proveedor = cod_proveedor;
        this.descripcion = descripcion;
        // this.precio = precio;
        this.costo = costo;
        this.flete = flete;
        this.incremento = incremento;
        this.stock = stock;
        this.imagen = imagen;
        this.ganancia = ganancia;
    }
}
