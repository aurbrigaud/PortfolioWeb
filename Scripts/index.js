//This function will be called when user click changing language


function traduction(lng, tagAttr){
  // print("Hello Tim");
  // print(lng);
  // print(tagAttr);

  var translate = new Translate();
  // print(translate);

  translate.init(tagAttr, lng);
  translate.process();
  if(lng == 'en'){
    $("#enTranslator").css('color', '#000000');
    $("#frTranslator").css('color', '#939393');
  } 
  if(lng == 'fr'){
    $("#frTranslator").css('color', '#000000');
    $("#enTranslator").css('color', '#939393');
  }

}

$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
   // translate('en', 'lng-tag');
    traduction('en', 'lng-tag');
  //  print("anglais");
  });
  //This is id of HTML element (French) with attribute lng-tag
  $("#frTranslator").click(function(){
    traduction('fr', 'lng-tag');
    // print("français");

  });
});