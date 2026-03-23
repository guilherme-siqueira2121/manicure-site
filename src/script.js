document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var url = this.getAttribute('href');
        window.location.href = url;
    });
})