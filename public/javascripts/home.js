$.ajax({
    url:'http://localhost:3000/api/producto/',
    method:'GET',
    data:{},
    dataType: 'JSON',
}).done(function(data){
    console.log(data);
    data.forEach(element => {
        if(element.tipo==='servicios'){
            var card = 
            '<div class="col-md-4">'+element.nombre+''+
            '<p>'+element.tipo+'</p>'+
            '<img src="/images/'+element.img+'"'+
            '<p'+element.precio+'<p>'+
            '<br><a class="btn btn-success" href="/detalle/'+element._id+'">Ver más</a>'
            '</div>';

            $('#contentServicios').append(card);

        }else if(element.tipo==='invitacion-impresa'){
            var card = 
            '<div class="col-md-4">'+element.nombre+''+
            '<p>'+element.tipo+'</p>'+
            '<img src="/images/'+element.img+'"'+
            '<p'+element.precio+'<p>'+
            '<br><a class="btn btn-success" href="/detalle/'+element._id+'">Ver más</a>'
            '</div>';

            $('#contentInvImpresa').append(card);

        }else if (element.tipo==='invitacion-digital'){
            var card = 
            '<div class="col-md-4">'+element.nombre+''+
            '<p>'+element.tipo+'</p>'+
            '<img src="/images/'+element.img+'"'+
            '<p'+element.precio+'<p>'+
            '<br><a class="btn btn-success" href="/detalle/'+element._id+'">Ver más</a>'
            '</div>';

            $('#contentInvDigital').append(card);
        }

        console.log(element.descripcion);
    });

}).fail(function(){
    alert("Error");

});