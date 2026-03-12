// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.


$(document).ready(function () {
    function loadUser() {
        $.getJSON("https://randomuser.me/api/", function (response) {
            const user = response.results[0];

            const fullName = user.name.first + " " + user.name.last;
            const email = user.email;
            const location = user.location.city + ", " + user.location.state + ", " + user.location.country;
            const age = user.dob.age;
            const picture = user.picture.large;
            const gender = user.gender;
            const cell = user.cell;

            $("#name").text(fullName);
            $("#email").text(email);
            $("#address").text(location);
            $("#age").text(age);
            $(".image img").attr("src", picture);

            //create mobile field 
            if ($("#mobile").length === 0) {
                $(".details").append('<p id="mobile">Mobile: <span></span></p>');
            }
            $("#mobile span").text(cell);

            if (gender === "male") {
                $("body").css("background-color", "steelblue");
            } else if (gender === "female") {
                $("body").css("background-color", "rebeccapurple");
            }
        });
    }

    //click handler for next profile button
    $("#next-btn").on("click", function () {
        loadUser();
    });

    //optional initial load
    loadUser();
});