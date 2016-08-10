$(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var phraseInput = $("input#phrase").val();
    var phrasecaps = phraseInput.toUpperCase();

    $(".name").text(nameInput);
    $(".phrase").text(phraseInput);
    $(".phrasecaps").text(phrasecaps);
    
    $("#story").show();

    event.preventDefault();
  });
});
