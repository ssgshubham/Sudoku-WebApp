window.onload=function() {
    init();

}
function init(){
    games = 
       ["003020600900305001001806400008102900700000008006708200002609500800203009005010300",
        "200080300060070084030500209000105408000000000402706000301007040720040060004010003",
        "000000907000420180000705026100904000050000040000507009920108000034059000507000000",
        "030050040008010500460000012070502080000603000040109030250000098001020600080060020",
        "020810740700003100090002805009040087400208003160030200302700060005600008076051090",
        "100920000524010000000000070050008102000000000402700090060000000000030945000071006",
        "043080250600000000000001094900004070000608000010200003820500000000000005034090710",
        "480006902002008001900370060840010200003704100001060049020085007700900600609200018",
        "000900002050123400030000160908000000070000090000000205091000050007439020400007000",
        "001900003900700160030005007050000009004302600200000070600100030042007006500006800",
        "000125400008400000420800000030000095060902010510000060000003049000007200001298000",
        "062340750100005600570000040000094800400000006005830000030000091006400007059083260",
        "300000000005009000200504000020000700160000058704310600000890100000067080000005437",
        "630000000000500008005674000000020000003401020000000345000007004080300902947100080",
        "000020040008035000000070602031046970200000000000501203049000730000000010800004000",
        "361025900080960010400000057008000471000603000259000800740000005020018060005470329",
        "050807020600010090702540006070020301504000908103080070900076205060090003080103040",
        "080005000000003457000070809060400903007010500408007020901020000842300000000100080",
        "003502900000040000106000305900251008070408030800763001308000104000020000005104800",
        "000000000009805100051907420290401065000000000140508093026709580005103600000000000",
        "020030090000907000900208005004806500607000208003102900800605007000309000030020050",
        "005000006070009020000500107804150000000803000000092805907006000030400010200000600",
        "040000050001943600009000300600050002103000506800020007005000200002436700030000040",
        "004000000000030002390700080400009001209801307600200008010008053900040000000000800",
        "360020089000361000000000000803000602400603007607000108000000000000418000970030014",
        "500400060009000800640020000000001008208000501700500000000090084003000600060003002",
        "007256400400000005010030060000508000008060200000107000030070090200000004006312700",
        "000000000079050180800000007007306800450708096003502700700000005016030420000000000",
        "030000080009000500007509200700105008020090030900402001004207100002000800070000090",
        "200170603050000100000006079000040700000801000009050000310400000005000060906037002",
        "000000080800701040040020030374000900000030000005000321010060050050802006080000000",
        "000000085000210009960080100500800016000000000890006007009070052300054000480000000",
        "608070502050608070002000300500090006040302050800050003005000200010704090409060701",
        "050010040107000602000905000208030501040070020901080406000401000304000709020060010",
        "053000790009753400100000002090080010000907000080030070500000003007641200061000940",
        "006080300049070250000405000600317004007000800100826009000702000075040190003090600",
        "005080700700204005320000084060105040008000500070803010450000091600508007003010600",
        "000900800128006400070800060800430007500000009600079008090004010003600284001007000",
        "000080000270000054095000810009806400020403060006905100017000620460000038000090000",
        "000602000400050001085010620038206710000000000019407350026040530900020007000809000",
        "000900002050123400030000160908000000070000090000000205091000050007439020400007000",
        "380000000000400785009020300060090000800302009000040070001070500495006000000000092",
        "000158000002060800030000040027030510000000000046080790050000080004070100000325000",
        "010500200900001000002008030500030007008000500600080004040100700000700006003004050",
        "080000040000469000400000007005904600070608030008502100900000005000781000060000010",
        "904200007010000000000706500000800090020904060040002000001607000000000030300005702",
        "000700800006000031040002000024070000010030080000060290000800070860000500002006000",
        "001007090590080001030000080000005800050060020004100000080000030100020079020700400",
        "000003017015009008060000000100007000009000200000500004000000020500600340340200000",
        "300200000000107000706030500070009080900020004010800050009040301000702000000008006"];
    let Array2D = (r,c) => [...Array(r)].map(x=>Array(c).fill(0));
    grid=Array2D(9,9);
    id = [];
    let rand = Math.floor(Math.random()*50);
    newgame = games[rand];
    
    for (var i = 0; i < 81; i++){
        id[i] = "value"+i;
        grid[Math.floor(i/9)][i % 9] = newgame[i];
        if (newgame[i] != "0"){
            (document.getElementById(id[i])).value = newgame[i];
            (document.getElementById(id[i])).classList.toggle("close");
        }
    }
    document.getElementById("gamestate").innerHTML = "Valid inputs are 1-9";
}
function checkValid(){
    var list = [];
    var nomoreZeros = true;
    document.getElementById("gamestate").innerHTML = "Valid inputs are 1-9";
    for (var i = 0; i < 81; i++){
        grid[Math.floor(i/9)][i % 9] = newgame[i];
    }
    for (var i = 0; i < 81; i++){
        var x = document.getElementById(id[i]).value;
        if (x == ""){
            grid[Math.floor(i/9)][i % 9] = "0";
            nomoreZeros = false;
        }
        else{
            if (newgame[i] == "0"){
                list.push(isValidNum(Math.floor(i/9), i % 9, x));
            }
            grid[Math.floor(i/9)][i % 9] = x;
        }
    }
    for (var i = 0; i < list.length; i++){
        if (list[i] == false){
            document.getElementById("gamestate").innerHTML = "There is an invalid input.";
            break;
        }
        else if (list[i] == true && i == list.length-1 && nomoreZeros){
            document.getElementById("gamestate").innerHTML = "Good Job! Sudoku board is solved."
            break;
        }
        else if (list[i] == true && i == list.length-1){
            document.getElementById("gamestate").innerHTML = "All input are valid so far.";
            break;
        }
    }
    list = [];
    nomoreZeros = true;
    
}

function solveBoard(){
    for (var i = 0; i < 81; i++){
        grid[Math.floor(i/9)][i % 9] = newgame[i];
    }
    var solved = solve();
    for (var row = 0; row < 9; row ++){
        for (var col = 0; col < 9; col++){
            (document.getElementById(id[row*9 + col])).value = grid[row][col];
        }
    }
    if (solved == true){document.getElementById("gamestate").innerHTML = "Solution to Sudoku board.";}
    else{document.getElementById("gamestate").innerHTML = "No Solution to Sudoku board.";}
}

function resetBoard(){
    for (var i = 0; i < 81; i++){
        grid[Math.floor(i/9)][i % 9] = newgame[i];
        if (newgame[i] != "0"){
            (document.getElementById(id[i])).value = newgame[i];
        }
        else{
            (document.getElementById(id[i])).value = "";
        }
    }
    document.getElementById("gamestate").innerHTML = "Valid inputs are 1-9";
}

//prevents inputting anything other than numbers
function myFunction() {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser
    if ((key < 49 || key > 57) && key != 8) { //if it is not a number ascii code (excluding backspace)
        //Prevent default action, which is displaying character
        if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
    }
}

function solve(){
    var pos = findEmptyPos();
    if (pos == null)
        return true;
    var row = pos[0]; //var makes it so it is local to function (this was the bug i was stuck on)
    var col = pos[1]; //var makes it so it is local to function
    
    for (var i = 1; i < 10; i++){
        if (isValidNum(row,col,String.fromCharCode(i+48))){
            grid[row][col] = String.fromCharCode(i+48);
            if (solve() == true){
                return true;
            }
            grid[row][col] = "0";
        }   
    }
    return false;
}

function findEmptyPos(){
    for (var row = 0; row < 9; row ++){
        for (var col = 0; col < 9; col++){
            if (grid[row][col] == "0"){
                return [row, col];
            }
        }
    }
    return null;
}

function isValidNum(row, col, num){
    return (validInBox(row, col, num) && validInRow(row, num) && validInCol( col, num));
}

    
function validInCol(col, num){
    for (var row = 0; row < 9; row++){
        if (num == grid[row][col]){
            return false;
        }
    }
    return true;
}

function validInRow( row, num){
    for (var col= 0; col < 9; col++){
        if (num == grid[row][col])
            return false;
    }
    return true;
}
function validInBox(row, col, num){
    const rowlist = [0,3,6,9];
    const collist = [0,3,6,9];
    var checkrow = 0;
    var checkcol = 0;

    for (var i = 0; i < 3; i++){
        if (row >= rowlist[i] && row < rowlist[i+1]){
            checkrow = rowlist[i];
        }
    }
    for (var i = 0; i < 3; i++){
        if (col >= collist[i] && col < collist[i+1])
            checkcol = collist[i];
    }
    for (var i = checkrow; i < checkrow + 3; i++){
        for (var j = checkcol; j < checkcol + 3; j++){
            if (num == grid[i][j]){
                return false;
            }
        }
    }
    
    return true;
}
