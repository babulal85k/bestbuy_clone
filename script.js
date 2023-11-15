document.getElementById("toggle-button").addEventListener("click", function() {
    var svg = document.querySelector('.hamburger-icon');
    svg.classList.toggle('open-hamburger-icon');
    svg.classList.toggle('close-hamburger-icon');

    // Toggle path data for cross icon
    var path = svg.querySelector('path');
    if (svg.classList.contains('close-hamburger-icon')) {
        path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    } else {
        // Restore the original path data for the hamburger icon
        path.setAttribute('d', 'M19.25 7.5H4.75c-.41 0-.75-.34-.75-.75S4.34 6 4.75 6h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 5.25H4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.5c.41 0 .75.34.75.75s-.34.75-.75.75z');
    }
});
