document.addEventListener('DOMContentLoaded', function () {
const app = document.getElementById("booklist");

const bookl = document.createElement('div');
bookl.setAttribute('class', 'bookl');

const text = document.createElement('a');
text.href = "https://www.goodreads.com/review/list/84229961?shelf=currently-reading";
text.textContent = "Currently Reading:";

app.appendChild(text);
app.appendChild(bookl);

var request = new XMLHttpRequest();

request.open('Get', 'https://benhooperorgapi.azurewebsites.net/api/HttpTrigger1?code=sh/Xl2Sg5wFax6akpAmvSheFfMf9hbSToTtsPxZVIEMUi7kUzQVcOA==&name=test', true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(book => {
      const title = document.createElement('div');
      title.setAttribute('class', 'title');

      const h6 = document.createElement('h6');

      const link = document.createElement('a');
      link.href = book.book.link;
      link.textContent = book.book.title;

      bookl.appendChild(title);
      title.appendChild(h6);
      h6.appendChild(link);
    })
  } else {
      const title = document.createElement('div');
      title.setAttribute('class', 'title');

      const h6 = document.createElement('h6');
      h6.textContent = "Goodreads Data Unavailable";

      bookl.appendChild(title);
      title.appendChild(h6);
  }
}

request.send();
});

