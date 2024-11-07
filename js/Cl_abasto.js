export default class Cl_abasto {
  constructor() {
    this.articulos = [];
  }

  agregarArticulo(articulo) {
    this.articulos.push(articulo);
  }

  menorPvp() {
    let menorPvp = this.articulos[0].pvp();
    for (let i = 1; i < this.articulos.length; i++)
      if (this.articulos[i].pvp() < menorPvp)
        menorPvp = this.articulos[i].pvp();
    return menorPvp;
  }

  costoPromedio() {
    let promedio = 0;
    for (let i = 0; i < this.articulos.length; i++)
      promedio += this.articulos[i].costo;
    promedio = promedio / this.articulos.length;
    return promedio;
  }
  articulosMenorPvp() {
    let menorPvp = this.menorPvp();
    return this.articulos.filter((articulo) => articulo.pvp() == menorPvp);
  }
  articulosCostoMayorPromedio() {
    let articulosResult = [],
      promedio = this.costoPromedio();
    for (let i = 0; i < this.articulos.length; i++)
      if (this.articulos[i].costo > promedio)
        articulosResult.push(this.articulos[i]);
    return articulosResult;
  }

  cantidadArticulosMenorPvp() {
    let menorPvp = this.menorPvp(),
      cntArticulos = 0;
    for (let i = 0; i < this.articulos.length; i++)
      if (this.articulos[i].pvp() == menorPvp) cntArticulos++;
    return cntArticulos;
    //return this.articulos.filter((articulo) => articulo.pvp() == menorPvp).length;
  }

  cantidadCostoMayorPromedio() {
    let promedio = this.costoPromedio();
    let cntArticulos = 0;
//    for (let i = 0; i < this.articulos.length; i++)
//      if (this.articulos[i].costo > promedio) cntArticulos++;
//    return cntArticulos;
    return this.articulos.filter((articulo) => articulo.costo > promedio).length;
  }
}
