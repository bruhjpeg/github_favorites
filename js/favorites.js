// classe que vai conter a lógica dos dados
// como os dados serão estruturados

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
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

    this.update();
  }
  // função que irá chamar
  update() {
    this.removeAllTr();

    //uma estrutura de array que está contendo 2 objetos.
    //vamos adicionar uma funcionalidade: que para cada um desses objetos, eu quero rodar uma função.
    //temos o forEach() que faz isso.

    this.entries.forEach((user) => {
    
    });
  }

  //função que irá recriar cada coluna:
  //recortei lá do html uma tr e colei aqui. passando com template literals (``).
  createRow() {
    //criando o tr pela DOM:
    const tr = document.createElement("tr");
    // conteudo da tr recortado do html:
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
    // adicionando o conteúdo da tr pelo js:
    tr.innerHTML = content;

    return tr;
  }

  //função que irá remover os tr:
  removeAllTr() {
    const tbody = this.root.querySelector("table tbody");

    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
//criando o html
//criando um local chamado update - uma função dentro da classe que não precisa do nome function. é só simplesmente o nome da função, parênteses e chaves.

//esta função update será chamada várias vezes
// toda vez que eu mudar um dado, adicionar um dado, remover um elemento, irei rodar esta função

//selecionando o tbody, dento do #app, que agora pode ser chamado de this.root
//constante chamada tbody para receber o tbody do html
//   update() {
//   }
//------------------------------------------------------
//const tbody = this.root.querySelector("table tbody");
//------------------------------------------------------
//feito isso, irei entrar dentro do tbody pegando todos os seletores tr agora, ou seja, pegar todas as linhas(All=Tudo)

//podemos passar algumas funcionalidades de array, pois é quase um, é um array like.

//eu quero que para cada um dele execute uma função.
//vamos usar o forEach que é uma funcionalidade para arrays, que recebe uma função, ou seja, para cada um tr, execute esta função.
//----------------------------------------------
//tbody.querySelectorAll("tr").forEach((tr) => {
//----------------------------------------------
//removendo os tr da página

// tr.remove();
//});

//para ficar mais claro irei criar uma função chamada removeAllTr
// que ficará responsável por remover os tr (linhas da minha página)
// e adicionar o que criei acima.
//####################################################################

//próximo passo: recriar cada coluna que eu tiver ali. cada coluna do meu html precisa ser recriada.
