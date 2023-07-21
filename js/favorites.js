// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }
  // função load para o carregamento dos dados:
  load() {
    this.entries = [
      {
        login: "bruhjpeg",
        name: "Bruna Assis",
        public_repos: "29",
        followers: "3",
      },
      {
        login: "bruhjpeg",
        name: "Bruna Assis",
        public_repos: "29",
        followers: "3",
      },
    ];
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

   this.tbody = this.root.querySelector("table tbody");
    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();
      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;

      this.tbody.append(row)
    });

    
  }

  createRow() {
    //criando o tr pela DOM:
    const tr = document.createElement("tr");

    const content = `
    <td class="user">
      <img
        src="https://github.com/bruhjpeg.png"
        alt="Imagem de bruhjpeg"
      />
      <a href="https://github.com/bruhjpeg" target="_blank">
        <p>Bruna Assis</p>
        <span>bruhjpeg</span>
      </a>
    </td>
    <td class="repositories">29</td>
    <td class="followers">3</td>
    <td>
      <button class="remove">&times;</button>
    </td>
    `;

    tr.innerHTML = content;

    return tr;
  }

  removeAllTr() {
    

   this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
