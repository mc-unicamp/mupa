class Museu {
  constructor() {
    this.rotaVisivel = false
  }

  mostraRota () {
    const rota = document.getElementById("rota_onibus")
    if (!this.rotaVisivel)
      rota.style.display = 'block'
    else
      rota.style.display = 'none'
    this.rotaVisivel = !this.rotaVisivel
  }

  over (id, center) {
    const target = document.getElementById(id)
    target.setAttribute('transform-origin', center)
    target.setAttribute('transform', 'scale(2, 2)')
  }

  out (id, center) {
    const target = document.getElementById(id)
    target.setAttribute('transform-origin', center)
    target.setAttribute('transform', 'scale(1, 1)')
  }

  click (id, center) {
    const target = document.getElementById(id)
    target.setAttribute('transform-origin', center)
    target.setAttribute('transform', 'scale(5, 5)')
    setInterval(this.out(id, center), 1000)
  }
}

Museu.i = new Museu()