$(document).ready(function() {
  CodeMirror.fromTextArea(document.getElementsByClassName("code"), {
    lineNumbers: false,
    matchBrackets: true,
    mode: "text/x-scala",
    theme: "elegant"
  })
});
