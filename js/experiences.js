document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.experience-titles li');
    const details = document.querySelectorAll('.experience-item');

    titles.forEach(title => {
        title.addEventListener('click', function() {
            // Remove active class from all titles and details
            titles.forEach(t => t.classList.remove('active'));
            details.forEach(d => d.classList.remove('active'));

            // Add active class to the clicked title and corresponding detail
            const index = this.getAttribute('data-index');
            this.classList.add('active');
            document.querySelector(`.experience-item[data-index="${index}"]`).classList.add('active');
        });
    });

    // Activate the first title and detail by default
    if (titles.length > 0) {
        titles[0].classList.add('active');
        details[0].classList.add('active');
    }
});