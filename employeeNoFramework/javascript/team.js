function search() {
	var input = document.getElementById("searchInput");
	var filter = input.value.toLowerCase();
	var nodes = document.querySelectorAll('.teamName');
  
	for (i = 0; i < nodes.length; i++) {
		if (nodes[i].innerText.toLowerCase().includes(filter)) {
			nodes[i].parentNode.style.display = "block";
		} else {
			nodes[i].parentNode.style.display = "none";
		}
	}
}