class PilaLimitada {
    constructor(MaxTamnio) {
      this.MaxTamnio = MaxTamnio;
      this.familiaNombres = [];
    }
  
    push(elemento) {
      if (this.familiaNombres.length >= this.MaxTamnio) {
        console.error("Error: La pila está llena");
      } else {
        this.familiaNombres.push(elemento);
      }
    }
  
    pop() {
      if (this.familiaNombres.length === 0) {
        return "Error: La pila está vacía";
      }
      return this.familiaNombres.pop();
    }
  
      peek() {
          if (this.familiaNombres.length === 0) {
              return "Error: La pila está vacía";
          }
          return this.familiaNombres[this.familiaNombres.length - 1];
      }
  
    imprimir() {
      console.log(this.familiaNombres);
    }
  }
  
  let PilaCarrilloPichola = new PilaLimitada(8);
  
  PilaCarrilloPichola.push("Rony");
  PilaCarrilloPichola.push("Osman");
  PilaCarrilloPichola.push("Carrillo");
  PilaCarrilloPichola.push("Bermudez");
  PilaCarrilloPichola.push("Maria");
  PilaCarrilloPichola.push("Cecilia");
  PilaCarrilloPichola.push("Picholá");
  PilaCarrilloPichola.push("Ramírez");
  PilaCarrilloPichola.push("Maria");
  PilaCarrilloPichola.push("Rosangela");
  PilaCarrilloPichola.push("Carrillo");
  PilaCarrilloPichola.push("Pichola");
  
  PilaCarrilloPichola.imprimir();