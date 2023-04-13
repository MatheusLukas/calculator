// Calculadora feita usando Factory Function para treino.

function createCalculator() {
  return {
    display: document.querySelector("#display"),
    btnClear: document.querySelector("#btn-clear"),
    deleteOneNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },
    start() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.resultAccount();
        }
      });
    },

    resultAccount() {
      // Usar eval pode trazer alguns riscos à aplicação.
      let account = this.display.value;

      try {
        account = eval(account);
        if (!account) {
          alert("Conta Inválida");
          return;
        }
        this.display.value = String(account);
      } catch (e) {
        alert("Conta Inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    clickButtons() {
      //this -> é a calculadora
      addEventListener("click", (e) => {
        const element = e.target;
        // console.log(element.classList);

        if (element.classList.contains("btn-number")) {
          this.btnForDisplay(element.innerText);
        }
        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (element.classList.contains("btn-delete")) {
          this.deleteOneNumber();
        }
        if (element.classList.contains("btn-equal")) {
          this.resultAccount();
        }
      });
    },

    btnForDisplay(valueButton) {
      this.display.value += valueButton;
    },
  };
}

const calculator = createCalculator();
calculator.start();
// calculator.clickButtons();
// console.log(calculator, calculator.start());
// console.log(calculator.clickButtons());
