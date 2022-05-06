let comisionA: number[] = new Array(8, 5, 7, 10, 9, 2, 4, 8, 6, 8);
let comisionB: number[] = new Array(3, 6, 8, 5, 4, 7, 7, 4, 6, 8);
let comisionC: number[] = new Array(7, 6, 9, 8, 9, 8, 5, 7, 10, 9);

function promediarNota(notasDelAComision: Array<number>) {
  let promedio = 0;
  for (let i = 0; i < notasDelAComision.length; i++) {
    promedio = promedio + notasDelAComision[i];
  }
  return Number(promedio / notasDelAComision.length);
}

function cantidadDesaprobados(comision: Array<number>, nombreComision: string) {
  let numDesaprobados = 0;
  for (let i = 0; i < comision.length; i++) {
    if (comision[i] < 7) {
      numDesaprobados++;
    }
  }
  return console.log(
    `la cantidad de desaprobados en la ${nombreComision} son ${numDesaprobados}`
  );
}

function mejorPromedio(
  comision1: Array<number>,
  nombreComision1: string,
  comision2: Array<number>,
  nombreComision2: string,
  comision3: Array<number>,
  nombreComision3: string
) {
  if (
    promediarNota(comision1) > promediarNota(comision2) &&
    promediarNota(comision1) > promediarNota(comision3)
  ) {
    return console.log(
      `el promedio mas alto es ${promediarNota(
        comision1
      )} y pertenece a ${nombreComision1}`
    );
  } else if (
    promediarNota(comision1) > promediarNota(comision2) &&
    promediarNota(comision1) < promediarNota(comision3)
  ) {
    return console.log(
      `el promedio mas alto es ${promediarNota(
        comision3
      )} y pertenece a ${nombreComision3}`
    );
  } else {
    return console.log(
      `el promedio mas alto es ${promediarNota(
        comision2
      )}  y pertenece a ${nombreComision2}`
    );
  }
}

function peorPromedio(
  comision1: Array<number>,
  nombreComision1: string,
  comision2: Array<number>,
  nombreComision2: string,
  comision3: Array<number>,
  nombreComision3: string
) {
  if (
    promediarNota(comision1) < promediarNota(comision2) &&
    promediarNota(comision1) < promediarNota(comision3)
  ) {
    return console.log(
      `el promedio mas bajo es ${promediarNota(
        comision1
      )} y pertenece a ${nombreComision1}`
    );
  } else if (
    promediarNota(comision1) < promediarNota(comision2) &&
    promediarNota(comision1) > promediarNota(comision3)
  ) {
    return console.log(
      `el promedio mas bajo es ${promediarNota(
        comision3
      )} y pertenece a ${nombreComision3}`
    );
  } else {
    return console.log(
      `el promedio mas bajo es ${promediarNota(
        comision2
      )}  y pertenece a ${nombreComision2}`
    );
  }
}

function calcularPeorNota(comision: Array<number>, nombreComision: string) {
  let menorNota = 10;
  for (let i = 0; i < comision.length; i++) {
    if (comision[i] < menorNota) {
      menorNota = comision[i];
    }
  }

  return console.log(`la menor nota en la ${nombreComision} es ${menorNota} `);
}

mejorPromedio(
  comisionA,
  "comision A",
  comisionB,
  "comision B",
  comisionC,
  "comision C"
);

peorPromedio(
  comisionA,
  "comision A",
  comisionB,
  "comision B",
  comisionC,
  "comision C"
);

cantidadDesaprobados(comisionA, "comision A");
cantidadDesaprobados(comisionB, "comision B");
cantidadDesaprobados(comisionC, "comision C");

calcularPeorNota(comisionA, "comision A");
calcularPeorNota(comisionB, "comision B");
calcularPeorNota(comisionC, "comision C");
