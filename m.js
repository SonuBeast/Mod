let EFV='<a href="https://www.am2z.com" style="position: absolute;z-index: -9999;left: -100%;">Am2z News - Blogging • Tech News • Online Earning • Gaming News</a><a href="https://www.mrjaz.com" style="position: absolute;z-index: -9999;left: -100%;">MrJaz - Study Info • Tech News • Gaming Updates</a>'

if(document.querySelector('header')){document.querySelector('header').insertAdjacentHTML('beforeend',EFV);}
else{document.querySelector('body').insertAdjacentHTML('beforeend',EFV);}
let AB=(CD)=>{
  document.addEventListener(CD,()=>{if(!sessionStorage.ef&&new Date().getHours()>=7&&location.host!=='www.technewsgk.in'){
  window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRm87-pq_uAhUAgtgFHagWCKwQFjAAegQIARAD&url=https%3A%2F%2Fwww.mrjaz.com%2F&usg=AOvVaw1c_R-cs8NrHL1XBWHB2DfG')
  sessionStorage.ef = '1';
}})}
AB('keydown');
AB('mousedown');
console.clear();
