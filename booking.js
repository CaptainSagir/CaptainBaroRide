/* ==================================
   Captain Baro Rides - Booking System
================================== */


const rideForm = document.getElementById("rideForm");


if(rideForm){


rideForm.addEventListener("submit", function(event){


    event.preventDefault();



    // Get user information

    let name = document.getElementById("name").value;

    let phone = document.getElementById("phone").value;

    let pickup = document.getElementById("pickup").value;

    let destination = document.getElementById("destination").value;

    let date = document.getElementById("date").value;

    let time = document.getElementById("time").value;

    let fare = document.getElementById("fare").innerText;



    // Validation

    if(
        name === "" ||
        phone === "" ||
        pickup === "" ||
        destination === "" ||
        date === "" ||
        time === ""
    ){

        alert("Please complete all booking details.");

        return;

    }



    // Booking message


    alert(
        "Booking Successful!\n\n" +
        "Passenger: " + name +
        "\nPickup: " + pickup +
        "\nDestination: " + destination +
        "\nDate: " + date +
        "\nTime: " + time +
        "\nEstimated Fare: " + fare +
        "\n\nThank you for choosing Captain Baro Rides."
    );



    // Reset form after booking

    rideForm.reset();


    document.getElementById("fare").innerHTML = "₦0";


});


}