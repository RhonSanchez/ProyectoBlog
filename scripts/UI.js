// Clase de UI para mostrar datos dinámicos en nuestro blog
export class UI {
  constructor() {}
  // método para construir html
  async MostrarDatos(blogs) {
    let templateHtml = "";
    blogs.map((blog) => {
      templateHtml += `
        <article id="${blog.id}" class="blog">
          <div class="blog-detail">
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-date"><small><strong>Fecha:</strong> ${blog.date}</small></p>
            <button class="blog-btn">Ver</button>
            <p class="blog-description">${blog.description}</p>
          </div>
          <figure class="blog-imageContainer">
            <img class="blog-image" width="500" src="./img/${blog.img}" alt="Home de Josfifteen">
          </figure>
        </article>
      `;
    });
    document.querySelector("#blogs").innerHTML = templateHtml;
  }
}
