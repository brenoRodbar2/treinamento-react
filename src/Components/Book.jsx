
const dados = [
  {
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL600_SR600,400_.jpg",

    Titulo: "Programação POO",
    Autor: "Breno",
  },

  {
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/81mFBsBFYXL._AC_UL600_SR600,400_.jpg",

    Titulo: "Biblia",
    Autor: "João",
  },

  {
    imagem:
      "https://images-na.ssl-images-amazon.com/images/I/41e+dwz5W5L._AC_UL600_SR600,400_.jpg",

    Titulo: "Programação Dinamica",
    Autor: "Flavia",
  },
];

function Book() {
  return (
    // <article>
    //   <img src="" alt="" />
    //   <h2></h2>
    //   <h1></h1>
    // </article>

    <div className="flex flex-wrap gap-8 ">
      {dados.map((iten, id) => {
        return (
          <article
            className="flex flex-col items-center p-5 bg-white rounded-2xl"
            key={id}
          >
            <img src={iten.imagem} alt="" className="w-[400px] mb-2" />
            <div className="flex flex-col items-center">

              <span className="font-bold leading-none text-center tracking-widest">
                {iten.Titulo}
              </span>
              <span className="font-light leading-none ">{iten.Autor}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Book;
