// include-html.js
function includeHTML() {
    var elements, i, element, file;
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        file = element.getAttribute('include-html');
        if (file) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    element.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', file, true);
            xhttp.send();
        }
    }
}

