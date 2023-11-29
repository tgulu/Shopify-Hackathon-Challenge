// script that handles the progress bar and checked count 
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCountDisplay = document.getElementById('checkedCount');
    const progressFill = document.getElementById('progressFill');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
            if(this.checked){
                checkedCount++;
            } else {
                checkedCount--;
            }
            checkedCountDisplay.textContent = checkedCount; 
            const percentage = (checkedCount / checkboxes.length) * 100;
            progressFill.style.width = percentage + '%';
        });
    });
});
