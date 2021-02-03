const firstText = document.getElementById('first-text');
const secondText = document.getElementById('second-text');
const color = document.getElementById('color');
const fondo = document.getElementById('fondo');
const colorText = document.getElementById('color-text');
const backColor = document.getElementById('back-color');
const centerText = document.getElementById('center-text');
const darkLight = document.getElementById('dark/light')
const checkbox = document.getElementById('checkbox');

const topInput = document.getElementById('top-input');
const topCheck = document.getElementById('top-check');
const topcheck2 = document.getElementById ('top-check-2')
const bot = document.getElementById ('bot')
const option = document.getElementById('option');
const inputSize = document.getElementById('input-size');
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const centrar = document.getElementById('centrar');
const transparente = document.getElementById('transparente');
const urlImg = document.getElementById('url-img');
const bordeClaro = document.getElementById('borde-claro');
const bordeOscuro = document.getElementById('borde-oscuro');
const espaciado = document.getElementById('espaciado')
const main = document.getElementById('main')
const firstSection = document.getElementById ('first-section')
const mainTitle = document.getElementById ('main-title')
const aside = document.getElementById ('aside')
const imgBut = document.getElementById ('img-but')
const txtBut = document.getElementById ('txt-but')
const img = document.getElementById ('img')
const texto = document.getElementById ('texto')
const image = document.getElementById('image')

const colorBack = document.getElementById('color-back')
const brillo = document.getElementById('brillo')
const opacidad = document.getElementById('opacidad')
const contraste = document.getElementById('contraste')
const desenfoque = document.getElementById('desenfoque')
const grises = document.getElementById('grises')
const sepia = document.getElementById('sepia')
const hue = document.getElementById('hue')
const saturado = document.getElementById('saturado')
const negativo = document.getElementById('negativo')
const reestablecer = document.getElementById('reestablecer')
const downloadBut = document.getElementById('download-but')
const interlineado = document.getElementById('interlineado')
const dayNight = document.getElementById('day-night')
const adjust = document.getElementById('adjust')
const mbackcolor = document.getElementById('mback-color')
const estilosBack = document.getElementById('estilos-back')


/////////////////* funcionalidad seccion texto */////////////////////////
topInput.addEventListener('keyup', () => {
  firstText.innerHTML = topInput.value;
});

bot.addEventListener('keyup', () => {
  secondText.innerHTML = bot.value;
});


topCheck.addEventListener('click',() => {
  if(topCheck.checked){
    firstText.style.display = 'none';
    firstText.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    firstText.style.zIndex = '100'
    /*firstText.style.position = 'absolute'*/

  } else{
    firstText.style.display = 'block';
  }
})

topcheck2.addEventListener('click', () =>{
  if(topcheck2.checked){
    secondText.style.display = 'none';
  } else{
    secondText.style.display = 'block';
  }
})

/* Edición Fuentes */
option.addEventListener('change', () => {
  firstText.style.fontFamily = `${option.value}`;
  secondText.style.fontFamily = `${option.value}`
});


inputSize.addEventListener('keyup', () => {
  firstText.style.fontSize = `${inputSize.value}px`
  secondText.style.fontSize = `${inputSize.value}px`
});

inputSize.addEventListener('click', () => {
  firstText.style.fontSize = `${inputSize.value}px`
  secondText.style.fontSize = `${inputSize.value}px`
});

izquierda.addEventListener('click', (e) => {
  e.preventDefault();
  firstText.style.textAlign = 'left';
  secondText.style.textAlign = 'left';
});

derecha.addEventListener('click', (e) => {
  e.preventDefault();
  firstText.style.textAlign = 'right';
  secondText.style.textAlign = 'right';
});

centrar.addEventListener('click', (e) => {
  e.preventDefault();
  firstText.style.textAlign = 'center';
  secondText.style.textAlign = 'center';
});

color.addEventListener('input', (e) =>{
  const textColor = e.target.value;
  firstText.style.color = textColor;
  secondText.style.color = textColor;
  colorText.innerHTML = textColor.toUpperCase();
})

fondo.addEventListener('input', (e) =>{
  const backgrondColor = e.target.value;
  firstText.style.backgroundColor = backgrondColor;
  secondText.style.backgroundColor = backgrondColor;
  backColor.innerHTML = backgrondColor.toUpperCase();
})

transparente.addEventListener('click',(e) => {
  if (e.target.checked){
    firstText.style.backgroundColor = 'black';
    firstText.style.zIndex = '1'
  }else{
    firstText.style.backgroundColor = 'white'
  }
})

transparente.addEventListener('click',(e) => {
  if (e.target.checked){
    secondText.style.backgroundColor = 'black';
  }else{
    secondText.style.backgroundColor = 'white'
  }
})

/* contorno */

//////////////////////* sin funcionar *///////////////////////
bordeClaro.addEventListener('click', (e) => {
  firstText.style.textShadow = 'rgb(182, 180, 180) 9px 5px 5px ';
  secondText.style.textShadow = 'rgb(182, 180, 180) 9px 5px 5px'

})

bordeOscuro.addEventListener('click', () => {
  firstText.style.textShadow  = '#2b2f3a 9px 5px 5px';
  secondText.style.textShadow  = '#2b2f3a 9px 5px 5px';
})

ninguno.addEventListener('click', () =>{
  firstText.style.textShadow = 'none'
  secondText.style.textShadow = 'none'
})


/* espaciado */
const espaciadoTexto = () => {
  firstText.style.padding = `${espaciado.value}px 50px`;
  secondText.style.padding = `${espaciado.value}px 50px`;

}
espaciado.addEventListener('input', espaciadoTexto)

/* interlineado */

const interlinea = ('change', ()=>{
  firstText.style.lineHeight = `${interlineado.value}`
  secondText.style.lineHeight = `${interlineado.value}`
})
interlineado.addEventListener('change',interlinea)



/* Boton claro / oscuro */

checkbox.addEventListener('click',()=>{
  if(checkbox.checked){
    firstSection.style.backgroundColor = '#2b2f3a';
    mainTitle.style.color = 'rgb(182, 182, 180)';
    main.style.backgroundColor = 'rgb(78, 78, 78)'
    aside.style.backgroundColor = '#2b2f3a'
    aside.style.color = 'aliceblue';
    dayNight.style.backgroundColor = '#2b2f3a';
    adjust.style.color = 'rgb(182, 182, 180)';

  } else{
    firstSection.style.backgroundColor = 'rgb(182, 182, 180)';
    mainTitle.style.color = '#2b2f3a';
    main.style.backgroundColor = 'aliceblue';
    aside.style.backgroundColor = 'rgb(182, 180, 180)';
    aside.style.color = '#2b2f3a'
    dayNight.style.backgroundColor='rgb(182, 180, 180)'
    adjust.style.color = '#2b2f3a'
  }
})

///////////////////////* funcionalidad seccion IMG */////////////////////////

urlImg.addEventListener('keyup', (e)=>{
  const src = urlImg.value;
  centerText.style.backgroundImage = `url('${src}')`;
  centerText.style.backgroundPosition ='center';
  centerText.style.backgroundRepeat = 'no-repeat';
  centerText.style.backgroundSize = 'contain';
})

colorBack.addEventListener ('input', (e)=>{
  centerText.style.backgroundColor = e.target.value;
  mbackcolor.innerHTML = e.target.value;
})


/////////////////* no funciona *////////////
const estilosBackG = ('change',() =>{
  centerText.style.mixBlendMode = estilosBack.value;
})
/////////////////* no funciona *////////////

/* Filtros imagen */

const filtroImg = ()=>{
  centerText.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg)saturate(${saturado.value}%) invert(${negativo.value})`
};

brillo.addEventListener('change', filtroImg);
opacidad.addEventListener('change', filtroImg);
contraste.addEventListener('change', filtroImg);
desenfoque.addEventListener('change', filtroImg);
grises.addEventListener('change', filtroImg);
sepia.addEventListener('change', filtroImg);
hue.addEventListener('change', filtroImg);
saturado.addEventListener('change', filtroImg);
negativo.addEventListener('change', filtroImg);

/* boton reestablecer filtros ERROR YA QUE BORRA LA IMG */

reestablecer.addEventListener('click',()=>{
  brillo.value = '1'
  opacidad.value = '1'
  contraste.value = '100'
  desenfoque.value = '0'
  grises.value = '0'
  sepia.value = '0'
  hue.value = '0'
  saturado.value = '100'
  negativo.value = '0'
  
  filtroImg()

});

/* estilos ranges */




/* funcionalidad botones IMAGEN y TEXTO */

imgBut.addEventListener('click',(e)=>{
  img.style.display = '';
  texto.style.display = 'none';

})

txtBut.addEventListener('click',(e)=>{
  texto.style.display = 'block';
  img.style.display = 'none';
 
})

/* boton descargar meme */

downloadBut.addEventListener('click',(e)=>{
  domtoimage.toBlob(document.getElementById('section'))
    .then(function (blob) {
        window.saveAs(blob, 'meme.png');
    });
})