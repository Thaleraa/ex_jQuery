$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#tarefa').val()
        const novoItem = $('<li style="display: flex-wrap"> </li>')

        $(`<li>${novaTarefa}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#tarefa').val('')

        $('li').click (function(){
        $(this).css({"text-decoration":"line-through"})
        })
        })
    })

