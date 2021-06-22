function addRow(data)    
{    
    let headers = Object.keys(data)
    let tblRow = '<tr>';
    for(let h of headers){
      tblRow = tblRow + '<td>' + data[h] + '</td>';
    }
    tblRow = tblRow + '</tr>';
    $("#results").append(tblRow);    
}    
   
$("#button").click(function(){
    let input = $("#input").val();
    $.post("http://127.0.0.1:8000/predict",
  JSON.stringify({
    document: input
  }),
  function(data, status){
    $("#output").val(data.doc)
  });
});

$("#button1").click(function(){
  let input = $("#input").val();
  $.get(`https://jsonplaceholder.typicode.com/todos/${input}`, function(data, status){
    if(status == "success"){
       console.log(data)
        addRow(data)
    }
  });
});