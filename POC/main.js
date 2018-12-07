window.onload = function()
{
    var canvas = document.getElementById('scene');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        } else {
            new Player(0, 0, 0, context);
            new Player(1, 32, 0, context);
            new Player(2, 0, 32, context);
            new Player(3, 64, 64, context);
        }

}