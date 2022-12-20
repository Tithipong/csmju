function calbmi() {
    var height = 172;
    var weight = 70;

    //   console.log(height);

    return + weight / (height / 100) ** 2;
}

function logN(n) {
    document.getElementById('header').style.fontSize = n + 'px';
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
    alert(calbmi());

    //var name = 'Q';
    //var age = 20;
    //var GPA = 3.68;

    var user1 = { name: 'Q', gpa: 3.68, age: 20 };
    console.log('GPA' + user1.gpa);

    var userlist = [
        { name: 'Q', gpa: 3.68, age: 20 },
        { name: 'Mario', gpa: 2.23, age: 10 },
        { name: 'M', gpa: 3.34, age: 50 },
        { name: 'N', gpa: 3.12, age: 30 },
    ];
    //document.getElementById('users').innerHTML = user1.name;

    for (var i = 1; i < userlist.length; i++) {
        document.getElementById('users').innerHTML
        += (i + 1) + ' : ' + userlist[i].name;
    };

}
