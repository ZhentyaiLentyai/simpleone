document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('button__create').onclick = function() {
        document.getElementById('modal').style.display = 'block';
    };

    document.getElementById('button__save-exit').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };
    document.getElementById('button__exit').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };
    document.getElementById('button__below-cancel').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    };

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        }
    });
    
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});