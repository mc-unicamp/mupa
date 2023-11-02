class Museu {
  constructor() {
    this.rotaVisivel = false
  }

  mostraRota() {
    const rota = document.getElementById("rota_onibus")
    if (!this.rotaVisivel)
      rota.style.display = "block"
    else
      rota.style.display = "none"
    this.rotaVisivel = !this.rotaVisivel
  }
}

Museu.i = new Museu()