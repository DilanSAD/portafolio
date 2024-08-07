document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.form__input');
 
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.value) {
                input.classList.add('has-content');
            } else {
                input.classList.remove('has-content');
            }
        });
 
        // Trigger the event to set the initial state
        input.dispatchEvent(new Event('input'));
    });
});