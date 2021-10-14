$(document).ready(function() {
  console.log("works");
  $('#radio-form').submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    let answerArray = [q1,q2];
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    for(let char of answerArray) {
      if(char === "a") {
        a ++;
      }
      if(char === "b") {
        b ++;
      }
      if(char === "c") {
        c ++;
      }
      if(char === "d") {
        d ++;
      }
      if(char === "e") {
        e ++;
      }
      if(char === "f") {
        f ++;
      }
    }
    a = Math.round((a/2)*100)
    b = Math.round((b/2)*100)
    c = Math.round((c/2)*100)
    d = Math.round((d/2)*100)
    e = Math.round((e/2)*100)
    f = Math.round((f/2)*100)
    console.log(a,b,c,d,e,f)
    $("#a").html(`<p><em>${a}%<em><p>`)
    $("#b").html(`<p><em>${b}%<em><p>`)
    $("#c").html(`<p><em>${c}%<em><p>`)
    $("#d").html(`<p><em>${d}%<em><p>`)
    $("#e").html(`<p><em>${e}%<em><p>`)
    $("#f").html(`<p><em>${f}%<em><p>`)
  })
})