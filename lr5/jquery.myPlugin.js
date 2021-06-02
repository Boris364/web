(function( $ ){
  $(".cub_field>.cube:not(:first-child)").hide();
      var num, score_r,score_u, win_r, win_u;

      function newgame() {
        num = 1;
        score_r = 0;
        score_u = 0;
        win_r = 0;
        win_u = 0;
        $("#raund").text('');
        $("#result").text('');
      };
      newgame();

      function random() {
        $('.cube:visible').each(function(){
          $(this).text(Math.floor(Math.random() * 6)+1);
        });
      }
      random();

      $(function(){
        $('#slider').slider({
          min: 1,
          max: 4,
          step: 1,
          slide: function (event, ui) {
            if (num>=ui.value) {
              $(".cube:nth-child(" + num + ")").hide();
              num = ui.value;
            }else{
              num = ui.value;
              $(".cube:nth-child(" + num + ")").show();
            }
          }
        });

        
        $("#brosok").click(function(){
          score_r = 0;
          score_u = 0;
          
          random();
          
          $('#robot .cube:visible').each(function(){
            score_r += Number($(this).text());
          });
          $('#you .cube:visible').each(function(){
            score_u += Number($(this).text());
          });

          if (score_u>score_r) {
            win_u++
          }else if(score_u==score_r){
              win_u++;
              win_r++;
            }else win_r++
          console.log(score_r + "  " + score_u);

          $("#raund").text("Текущий раунд: " + (win_u+win_r));
          $("#result").text("Компьюетр " + win_r + ":" + win_u + " Вы");

          if (win_u != win_r) {
            if (win_u==6) {
              $('#dialog').dialog('open');
              $('#winner').text("Поздравляем, вы победили!");
            }
            if (win_r==6) {
              $('#dialog').dialog('open');
              $('#winner').text("На этот раз компьютер оказался удачливее");
            }
          }else if (win_u==6 && win_r==6) {
              $('#dialog').dialog('open');
              $('#winner').text("Победила дружба :)");
            }
        });

        $("#restart").click(function(){
          newgame();
        });
        $('#dialog').dialog({
            resizable: false,
          height: "auto",
            width: 400,
            autoOpen: false,
            buttons: {
            "Новая игра": function() {
                  $( this ).dialog( "close" );
                  newgame();
                }
              }
          });
      });


})( jQuery );