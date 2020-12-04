
   var g=document.getElementById('add')
   console.log(g)
 
   var elem = document.forms.search_form;
 

  var d=elem.elements.number

 var re=/\b\d+\b/;
  
g.addEventListener('click',function(event){
   elem.action = "http://fe.it-academy.by/TestForm.php";
   elem.method = "GET";
   if(!re.test(d.value)){
      alert('введите ваш номер')
      d.focus()
   } else {
     elem.submit() 
     alert('запрос отправлен')
  }
})
//  