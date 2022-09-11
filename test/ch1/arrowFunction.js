function arrow(){
    setTimeout(
        () => {
            console.log(this, " => arrow");
        }
    ,1000 )
}

function not_arrow(){
    setTimeout(
        function(){
            console.log(this, " window? timeout?");
        }
    , 1000 )
}

arrow();
not_arrow();