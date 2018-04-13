function drawTree (treeHeight) {
    for ( var i = 0 ; i < 5 ; i++) {
        var star = '';
        for ( var j = 0 ; j < i ; j++) {
        var star += "*";
       };
       console.log(star);
    };
}
drawTree(3);