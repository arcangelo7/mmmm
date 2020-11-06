function addParagraphDivider() {
    section = document.getElementById("Summary");
    current = section.firstElementChild.nextSibling;

    while(current.nextSibling) {
        var para = document.createElement("P");
        para.innerHTML = "  ";
        var img = document.createElement("img");
        img.src = "img/red2.png";
        img.height = "10";
        para.appendChild(img);

        section.insertBefore(para, current);
        current = current.nextSibling.nextSibling;
    }
}

function removeParagraphDivider() {
    section = document.getElementById("Summary");
    var child = section.firstElementChild;
    var remove = false;
    while (child) {
        var next = child.nextElementSibling;
        if (remove)
            section.removeChild(child);
        remove = !remove;
        child = next;
    }
}