$(document).ready(function() {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature);
})

$('#temp-up').click(function() { // event listener
    thermostat.increaseTemperature(); // update model
    $('#temperature').text(thermostat.temperature); // update view
})

$('#temp-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.temperature);
})

function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
}

$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temp-up').click(function() {
        thermostat.increaseTemperature();
        updateTemperature();
    });

    $('#temp-down').click(function() {
        thermostat.decreaseTemperature();
        updateTemperature();
    });

    $('#temp-reset').click(function() {
        thermostat.reset();
        updateTemperature();
    });

    $('#psm-on').click(function() {
        thermostat.powerSavingModeOn();
        $('#power-saving').text('on')
        updateTemperature();
    });

    $('#psm-off').click(function() {
        thermostat.powerSavingModeOff();
        $('#power-saving').text('off')
        updateTemperature();
    });

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
    };
});

