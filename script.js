$(function() {
  var $school_mp3 = $("audio[src=\"school.mp3\"]").get(0),
      $screwed_mp3 = $("audio[src=\"screwed.mp3\"]").get(0),
      $idea_mp3 = $("audio[src=\"idea.mp3\"]").get(0),
      $assignment_mp3 = $("audio[src=\"assignment.mp3\"]").get(0),
      $useless_mp3 = $("audio[src=\"useless.mp3\"]").get(0),
      $use_mp3 = $("audio[src=\"use.mp3\"]").get(0),
      $title_mp3 = $("audio[src=\"title.mp3\"]").get(0),
      $production_mp3 = $("audio[src=\"production.mp3\"]").get(0),
      $earth_mp3 = $("audio[src=\"Earth.mp3\"]").get(0),
      $pik_mp3 = $("audio[src=\"pik.mp3\"]").get(0),
      $jupiter_mp3 = $("audio[src=\"Jupiter.mp3\"]").get(0),
      $blackhole_mp3 = $("audio[src=\"blackhole.mp3\"]").get(0),
      $press_mp3 = $("audio[src=\"press.mp3\"]").get(0),
      $The_mp3 =$("audio[src=\"The.mp3\"]").get(0),
      $sun_mp3 = $("audio[src=\"sun.mp3\"]").get(0),
      $End_mp3 =$("audio[src=\"End.mp3\"]").get(0);
  $("#btn1").click(function(){
     $school_mp3.play();
  });
  $("#btn-1").click(function(){
    $school_mp3.stop();
  });
  $("#btn2").click(function(){
    $screwed_mp3.play();
  });
  $("#btn-2").click(function(){
    $screwed_mp3.stop();
  });
  $("#btn3").click(function(){
    $assignment_mp3.play();
  });
  $("#btn-3").click(function(){
    $assignment_mp3.stop();
  });
  $("#btn4").click(function(){
    $idea_mp3.play();
  });
  $("#btn-4").click(function(){
    $idea_mp3.stop();
  });
  $("#btn5").click(function(){
    $use_mp3.stop();
  });
  $("#btn-5").click(function(){
    $use_mp3.stop();
  });
  $("#btn6").click(function(){
    $useless_mp3.play();
  });
  $("#btn-6").click(function(){
    $useless_mp3.stop();
  });
  $("#btn7").click(function(){
    $production_mp3.play();
  });
  $("#btn-7").click(function(){
    $production_mp3.stop();
  });
  $("#btn8").click(function(){
    $title_mp3.play();
  });
  $("#btn-8").click(function(){
    $title_mp3.stop();
  });
  $("#btn9").click(function(){
    $earth_mp3.play();
  });
  $("#btn-9").click(function(){
    $earth_mp3.stop();
  });
  $("#btn10").click(function(){
    $pik_mp3.play();
  });
  $("#btn-10").click(function(){
    $pik_mp3.stop();
  });
  $("#btn11").click(function(){
    $jupiter_mp3.play();
  });
  $("#btn-11").click(function(){
    $jupiter_mp3.stop();
  });
  $("#btn12").click(function(){
    $blackhole_mp3.play();
  });
  $("#btn-12").click(function(){
    $blackhole_mp3.stop();
  });
  $("#btn13").click(function(){
    $press_mp3.play();
  });
  $("#btn-13").click(function(){
    $press_mp3.stop();
  });
  $("#btn14").click(function(){
    $sun_mp3.play();
  });
  $("#btn-14").click(function(){
    $sun_mp3.stop();

    $("#btn15").click(function(){
    $The_mp3.play();
  });

  $("#btn-15").click(function(){
  $The_mp3.stop();

    $("#btn16").click(function(){
      $End_mp3.play();
    });

      $("#btn-16").click(function(){
        $End_mp3.stop();
      });

  });
});
