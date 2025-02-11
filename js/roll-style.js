function addRandomClass() {
    elements = document.querySelectorAll(".random-table-header");
    idx = 1;
    elements.forEach((el) => 
        {
            // Looking for the next ol sibling
            olSibling = null;
            sibling = el.nextSibling;
            depth = 1;
            while(olSibling == null || depth > 4) {
                if (sibling.tagName == "OL") {
                    olSibling = sibling;
                }
                sibling = sibling.nextSibling;
                depth++;
            }

            if (olSibling != null) {
                el.id = 'rnd-table-header-' + idx;
                el.onclick = function() { selectRandom(el); }
                olSibling.id = 'rnd-table-list-' + idx;
                olSibling.classList.add("random-table");
                addALevelToLi(olSibling);
                idx++;
            }
        }
    );
}

function addALevelToLi(olElement) {
    liElements = olElement.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++)
    {
        //liElements[i].innerHTML = '<div>' + liElements[i].innerHTML + '</div>'        
        liElements[i].innerHTML = '<a>' + liElements[i].innerHTML + '</a>'        
    }
}

function selectRandom(headerElement) {
    listId = headerElement.id.replace("header", "list");
    list = document.getElementById(listId);
    liElements = list.getElementsByTagName("li");
    for (let i = 0; i < liElements.length; i++)
    {
        liElements[i].classList.remove("selected");
    }
    idx = getRandomInt(liElements.length);
    liElements[idx].classList.add("selected");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

addRandomClass();