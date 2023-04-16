// Language: javascript
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

let users = [];
// Array(data.length).fill(0).length
fetch("./data/papers.json")
	.then((res) => res.json())
	.then((data) => {
	    const a = data;
		for (let i = 1; i < Object.keys(data).length + 1; i++) {
			const card = userCardTemplate.content.cloneNode(true);
			const header = card.querySelector("[data-header]");
			const book = card.querySelector("[data-book]")
			const body = card.querySelector("[data-body]");
			header.textContent = data[i]["name"];
			book.textContent = data[i]["book"]
		    const img = document.createElement("img")
		    img.src = data[i]["image"]
		    body.appendChild(img)
			userCardContainer.append(card);
			// return {
			// 	name: data[i]["title"],
			// 	email: data[i]["content"],
			// 	element: card,
			// };
		}
	});

let searchbarVar = document.getElementById("searchbar")

function search() {
    let input = searchbarVar.value;
    input = input;
    let x = document.getElementsByClassName("paperTitle");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
            x[i].parentElement.style.display = "none";
        }
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentElement.style.display = "block";
            x[i].style.display = "block"
        } else {
            x[i].parentElement.style.backgroundColor = "white";
        }
    }
}

const searchbar = document.getElementById("searchbar");
const overlay = document.getElementById("overlay-input");

function styles() {
	searchbar.style.zIndex = "100";
	overlay.style.display = "none";
	searchbar.focus();
	searchbar.style.outline = "none";
	searchbar.style.height = "65px";
	searchbar.style.borderRadius = "10px";
	searchbar.style.backgroundColor = "white";
	searchbar.style.padding = "10px";
	searchbar.style.fontSize = "25px";
	searchbar.style.textAlign = "center";
	searchbar.style.color = "var(--main-color-alt";
	searchbar.style.transition = "var(--main-transition)";
	searchbar.style.fontWeight = "lighter";
	searchbar.style.border = "2px solid var(--main-color-alt)";
	searchbar.style.boxShadow = "1.5px 1.5px 1.5px 1.5 var(--box-shadow)";
	fetch("./data/papers.json")
	.then((res) => res.json())
	.then((data) => {
	    searchbarVar.placeholder = `إبحث بين ${Object.keys(data).length} وثيقة`
	});
	if (window.location.pathname === "/dorar/novels.html") {
	    const aside = document.getElementById("asidee");
	    aside.style.zIndex = "1000"
	    const menu = document.getElementById("menu")
	    menu.style.zIndex = "1000"
	}
	searchbar.onmouseenter = function () {
		searchbar.style.border = "2.3px solid var(--main-color)";
		searchbar.style.boxShadow = "2.2px 2.2px 2.2px 2.2px var(--box-shadow)";
		searchbar.style.outline = "none";
	};
	searchbar.onmouseleave = function () {
		searchbar.style.border = "2px solid var(--main-color-alt)";
		searchbar.style.boxShadow = "1.5px 1.5px 1.5px 1.5 var(--box-shadow)";
		searchbar.style.outline = "none";
	};
}

overlay.onclick = function () {
	if (window.matchMedia("(max-width: 760px)").matches) {
		searchbar.style.width = "75%";
		styles();
	} else {
		searchbar.style.width = "350px";
		styles();
	}
};
