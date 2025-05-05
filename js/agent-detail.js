document.addEventListener('DOMContentLoaded', function() {
    const abilityButtons = document.querySelectorAll('.ability-icon-btn');
    const abilityDetails = document.querySelectorAll('.ability-detail');

    function switchAbility(ability) {
        abilityDetails.forEach(function(detail) {
            detail.style.display = 'none';
        });
        abilityButtons.forEach(function(button) {
            button.classList.remove('active');
        });

        document.getElementById(ability).style.display = 'block';
        document.querySelector(`[data-ability="${ability}"]`).classList.add('active');
    }

    abilityButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const ability = button.getAttribute('data-ability');
            switchAbility(ability);
        });
    });

    abilityDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });
});
