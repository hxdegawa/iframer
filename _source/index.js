$(function(){
  $(".nextbutton").click(function(){
    $("h1, .nextbutton").addClass("start");
    $(".newscreen").addClass("begin");
  });
  
  let url;
  $(".startbutton").click(function(){
    url = $(".maininput").val();
    if($(".maininput").val().trim().indexOf("/iframe>") > 0){
      if(url.indexOf("http") > 0 && url.split("src")[1].split('"')[$(".maininput").val().split("src")[1].match("http").index - 1] != 0){
        $(".newscreen").append('<iframe width="100%" height="100%" src="' + url.split("src")[1].split('"')[$(".maininput").val().split("src")[1].match("http").index - 1] + '" frameborder="0" allowfullscreen></iframe>');
        $(".startbutton, .maininput").remove();
      }else if(url.indexOf("http") > 0 && url.split("src")[1].split("'")[$(".maininput").val().split("src")[1].match("http").index - 1] != 0){
        $(".newscreen").append('<iframe width="100%" height="100%" src="' + url.split("src")[1].split("'")[$(".maininput").val().split("src")[1].match("http").index - 1] + '" frameborder="0" allowfullscreen></iframe>');
        $(".startbutton, .maininput").remove();
      }else{
        alert("this iframe is broken(no link inside)");
      }
      
    }else if($(".maininput").val().indexOf("://") > 0){
      $(".newscreen").append('<iframe width="100%" height="100%" src="' + url + '" frameborder="0" allowfullscreen></iframe>');
      $(".startbutton, .maininput").remove();
    }else{
      alert("You can only enter iframe tag or iframe movie link")
    }
    
    
    
  });
});