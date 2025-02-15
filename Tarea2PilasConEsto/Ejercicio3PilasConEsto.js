class UndoManager {
    constructor() {
      this.pila = [];
    }
  
    addAction(action) {
      this.pila.push(action);
    }
  
    undo() {
      return this.pila.pop();
    }
  
    getHistory() {
      return [...this.pila]; // Devuelve una copia para evitar modificaciones externas
    }
  }
  
  const manager = new UndoManager();

  
  manager.addAction("Meter al carrito 'pan'");
  manager.addAction("Meter al carrito 'mantequilla'");
  console.log(manager.getHistory());
  manager.undo();
  console.log(manager.getHistory());
  manager.undo();
  console.log(manager.getHistory());
  manager.addAction("Meter al carrito 'ajo'");
  console.log(manager.getHistory());

