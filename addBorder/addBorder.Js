function addBorder(picture){
    var wallLength = picture[0].length + 2;
    var wall = '';
    for(var i =0; i<wallLength; i++) {
        wall = wall.concat('*');
    }
    picture.unshift(wall);
    picture.push(wall);
    for(var i=1; i<picture.length-1; i++) {
        picture[i] = "*".concat(picture[i], "*");
    }
    return picture
}

 console.log(addBorder(["abc", "ded"]));