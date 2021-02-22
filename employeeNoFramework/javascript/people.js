function search() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("dataTable");
	var tr = table.getElementsByTagName("tr");
	var tds = tr.getElementsByTagName('td');

    for (var i = 0; i < tr.length; i++) {
        var firstCol = tds[0].textContent.toUpperCase();
		var secondCol = tds[1].textContent.toUpperCase();
		var thirdCol = tds[2].textContent.toUpperCase();
		var forthCol = tds[3].textContent.toUpperCase();
		var fifthCol = tds[4].textContent.toUpperCase();
		var sixthCol = tds[5].textContent.toUpperCase();

        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || forthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }      
    }
}

function filterTable(event) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#dataTable tbody").rows;
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent.toUpperCase();
		var secondCol = rows[i].cells[1].textContent.toUpperCase();
		var thirdCol = rows[i].cells[2].textContent.toUpperCase();
		var forthCol = rows[i].cells[3].textContent.toUpperCase();
		var fifthCol = rows[i].cells[4].textContent.toUpperCase();
		var sixthCol = rows[i].cells[5].textContent.toUpperCase();

        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1 || thirdCol.indexOf(filter) > -1 || forthCol.indexOf(filter) > -1 || fifthCol.indexOf(filter) > -1 || sixthCol.indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

document.querySelector('#searchInput').addEventListener('keyup', filterTable, false);

var info = document.getElementById("#tableinfo");

function onClick() {
	location.href = 'profile.html';
}