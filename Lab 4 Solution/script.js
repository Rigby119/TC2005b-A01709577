class Medida {
    constructor(val, unit) {
        this.val = val;
        this.unit = unit;
    }

    toIn() {
        if (this.unit === "m") return this.val * 39.37;
        if (this.unit === "cm") return this.val * 0.3937;
        return this.val;
    }

    toM() {
        if (this.unit === "in") return this.val * 0.0254;
        if (this.unit === "cm") return this.val / 100;
        return this.val;
    }

    toCm() {
        if (this.unit === "m") return this.val * 100;
        if (this.unit === "in") return this.val * 2.54;
        return this.val;
    }
}

function convert() {
    let val = parseFloat(document.getElementById("origen").value);
    let unit = document.getElementById("unit").value;
    let medida = new Medida(val, unit);

    let resultado = `
        ${val} ${unit} = ${medida.toIn().toFixed(2)} pulgadas <br>
        ${val} ${unit} = ${medida.toM().toFixed(2)} metros <br>
        ${val} ${unit} = ${medida.toCm().toFixed(2)} centímetros
    `;

    document.getElementById("resultado").innerHTML = resultado;
}