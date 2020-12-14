// Constantes para los tipos de 'valores' que reconoce nuestra gramática.
const TIPO_VALOR = {
  IDENTIFICADOR: "VAL_IDENTIFICADOR",
  NUMERO: "VAL_NUMERO",
  CADENA: "VAL_CADENA",
  BOOLEANO: "VAL_BOOLEANO"
};

// Constantes para los tipos de 'operaciones' que soporta nuestra gramática.
const TIPO_OPERACION = {
  SUMA: "OP_SUMA",
  RESTA: "OP_RESTA",
  MULTIPLICACION: "OP_MULTIPLICACION",
  DIVISION: "OP_DIVISION",
  NEGATIVO: "OP_NEGATIVO",
  MAYOR_QUE: "OP_MAYOR_QUE",
  MENOR_QUE: "OP_MENOR_QUE",

  MAYOR_IGUAL: "OP_MAYOR_IGUAL",
  MENOR_IGUAL: "OP_MENOR_IGUAL",
  DOBLE_IGUAL: "OP_DOBLE_IGUAL",
  NO_IGUAL: "OP_NO_IGUAL",

  AND: "OP_AND",
  OR: "OP_OR",
  NOT: "OP_NOT",

  CONCATENACION: "OP_CONCATENACION"
};

// Constantes para los tipos de 'instrucciones' válidas en nuestra gramática.
const TIPO_INSTRUCCION = {
  IMPRIMIR: "INSTR_IMPRIMIR",
  MIENTRAS: "INSTR_MIENTRAS",
  DECLARACION: "INSTR_DECLARACION",
  ASIGNACION: "INSTR_ASIGANCION",
  IF: "INSTR_IF",
  IF_ELSE: "INSTR_ELSE",
  PARA: "INST_PARA",
  DO: "INST_DO",
  ASIGNACION_SIMPLIFICADA: "ASIGNACION_SIMPLIFICADA"
};

// Esta función se encarga de crear objetos tipo Operación.
function nuevaOperacion(operandoIzq, operandoDer, tipo) {
  return {
    operandoIzq: operandoIzq,
    operandoDer: operandoDer,
    tipo: tipo
  };
}

// El objetivo de esta API es proveer las funciones necesarias para la construcción de operaciones e instrucciones.

const instruccionesAPI = {
  //Crea un nuevo objeto tipo Operación para las operaciones binarias válidas./
  nuevoOperacionBinaria: function(operandoIzq, operandoDer, tipo) {
    return nuevaOperacion(operandoIzq, operandoDer, tipo);
  },

  //Crea un nuevo objeto tipo Operación para las operaciones unarias válidas
  nuevoOperacionUnaria: function(operando, tipo) {
    return nuevaOperacion(operando, undefined, tipo);
  },

  //Crea un nuevo objeto tipo Valor, esto puede ser una cadena, un número, un booleano o un identificador
  nuevoValor: function(valor, tipo) {
    return {
      tipo: tipo,
      valor: valor
    };
  },

  // Crea un objeto tipo Instrucción para la sentencia Imprimir.
  nuevoImprimir: function(expresionCadena) {
    return {
      tipo: TIPO_INSTRUCCION.IMPRIMIR,
      expresionCadena: expresionCadena
    };
  },

  //Crea un objeto tipo Instrucción para la sentencia Mientras.
  nuevoMientras: function(expresionLogica, instrucciones) {
    return {
      tipo: TIPO_INSTRUCCION.MIENTRAS,
      expresionLogica: expresionLogica,
      instrucciones: instrucciones
    };
  },

  //Crea un objeto tipo instrucción para la sentencia Para.
  nuevoPara: function(
    variable,
    valorVariable,
    expresionLogica,
    aumento,
    instrucciones
  ) {
    return {
      tipo: TIPO_INSTRUCCION.PARA,
      expresionLogica: expresionLogica,
      instrucciones: instrucciones,
      aumento: aumento,
      variable: variable,
      valorVariable: valorVariable
    };
  },

  //Crea un objeto tipo Instrucción para la sentencia Declaración.
  nuevoDeclaracion: function(identificador, tipo) {
    return {
      tipo: TIPO_INSTRUCCION.DECLARACION,
      identificador: identificador,
      tipo_dato: tipo
    };
  },

  //Crea un objeto tipo Instrucción para la sentencia Asignación.
  nuevoAsignacion: function(identificador, expresion) {
    return {
      tipo: TIPO_INSTRUCCION.ASIGNACION,
      identificador: identificador,
      expresionNumerica: expresion
    };
  },

  //Crea un objeto tipo Instrucción para la sentencia If.
  nuevoIf: function(expresionLogica, instrucciones) {
    return {
      tipo: TIPO_INSTRUCCION.IF,
      expresionLogica: expresionLogica,
      instrucciones: instrucciones
    };
  },

  //Crea un objeto tipo Instrucción para la sentencia If-Else.
  nuevoIfElse: function(
    expresionLogica,
    instruccionesIfVerdadero,
    instruccionesIfFalso
  ) {
    return {
      tipo: TIPO_INSTRUCCION.IF_ELSE,
      expresionLogica: expresionLogica,
      instruccionesIfVerdadero: instruccionesIfVerdadero,
      instruccionesIfFalso: instruccionesIfFalso
    };
  },

  //Crea un objeto tipo Operador (+ , - , / , *)
  nuevoOperador: function(operador) {
    return operador;
  },

  //Crea un objeto tipo Instrucción para la sentencia Asignacion con Operador
  nuevoAsignacionSimplificada: function(
    identificador,
    operador,
    expresionNumerica
  ) {
    return {
      tipo: TIPO_INSTRUCCION.ASIGNACION_SIMPLIFICADA,
      operador: operador,
      expresionNumerica: expresionNumerica,
      identificador: identificador
    };
  }
};
// Exportamos nuestras constantes y nuestra API

module.exports.TIPO_OPERACION = TIPO_OPERACION;
module.exports.TIPO_INSTRUCCION = TIPO_INSTRUCCION;
module.exports.TIPO_VALOR = TIPO_VALOR;
module.exports.instruccionesAPI = instruccionesAPI;
