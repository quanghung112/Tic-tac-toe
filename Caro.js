let x = parseInt(prompt('Nhap kich thuoc ban co x :'));
let y = parseInt(prompt('Nhap kich thuoc ban co y :'));
let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < x; i++) {
    data += '<br>'
    board[i] = [];
    for (let j = 0; j < y; j++) {
        board[i][j] = '(.)';
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;
let dem = 0;

function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    if (dem % 2 == 0) {
        board[positionX][positionY] = "x";
    } else {
        board[positionX][positionY] = "o";
    }
    for (let i = 0; i < x; i++) {
        data += "<br/>";
        for (let j = 0; j < y; j++) {
            data += board[i][j];
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
    dem++;

    for (i = 0; i < x; i++) {
        for (j = 0; j < y; j++) {
            if (board[i][j] != '(.)') {
                if (board[i][j + 1] == board[i][j] && board[i][j + 2] == board[i][j]) {
                    document.getElementById('result').innerHTML = board[i][j] + ' thang';
                } else if (board[i + 1][j] == board[i][j] && board[i + 2][j] == board[i][j]) {
                    document.getElementById('result').innerHTML = board[i][j] + ' thang';
                } else if (board[i + 1][j + 1] == board[i][j] && board[i + 2][j + 2] == board[i][j]) {
                    document.getElementById('result').innerHTML = board[i][j] + ' thang';
                }else if (board[i + 1][j - 1] == board[i][j] && board[i + 2][j - 2] == board[i][j]) {
                    document.getElementById('result').innerHTML = board[i][j] + ' thang';
                }
            }
        }
    }
}