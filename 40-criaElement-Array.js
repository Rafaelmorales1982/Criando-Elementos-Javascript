const caixa1 = document.querySelector("#caixa1");
const cursos = [
  "HTML",
  "CSS",
  "Javascript",
  "PHP",
  "React",
  "MySql",
  "ReactNative",
];
//contador conta a quantidade de elementos no array vai ser utilizado no id para que não possa repitir o mesmo
cursos.map((el, contador) => {
  contador++;
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + contador); //começa pelo número 1
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;
  caixa1.appendChild(novoElemento);
  //criando elemento imagem
  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("class", "imagem_lixeira");
  btn_lixeira.setAttribute("src", "./img/excluir.png");
  novoElemento.appendChild(btn_lixeira);

  //Ao clicar vai remover o elemento no botão lixeira
  btn_lixeira.addEventListener("click", (evt) => {
    //console.log(evt.target);
    //para remover te que identiificar o pai dos elementos
    //Para remover clicando na imagem da lixeira tem que apontar para parentNode (Pai da imagem que é a div inteira e o pai das divs é caixa1)
    const confirmar = confirm(
      "Clique em 'OK' para Yes para excluir ou 'Cancelar' para No para não excluir");
      if(confirmar == true){
        alert("Clicou em 'Yes'");
    caixa1.removeChild(evt.target.parentNode);
      } else {
        alert("Clicou em 'No'");


      }
  });
});
