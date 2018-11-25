export class Articulo {

    public codArticulo: number;
    public cod_proveedor: number;
    public descripcion: string;
    public importe: number;
    public costo: number;
    public flete: number;
    public incremento: number;
    public stock: number;
    public imagen: string;

    constructor(codArticulo: number, cod_proveedor: number, descripcion: string, importe: number,
                 costo: number, flete: number, incremento: number, stock: number, imagen: string) {

        this.codArticulo = codArticulo;
        this.cod_proveedor = cod_proveedor;
        this.descripcion = descripcion;
        this.importe = importe;
        this.costo = costo;
        this.flete = flete;
        this.incremento = incremento;
        this.stock = stock;
        this.imagen = imagen;
    }
}
