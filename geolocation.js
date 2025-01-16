        // Function to get the user's location
        function getLocation() {
            if (navigator.geolocation) {
                // Try to get the current position
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                // Geolocation is not supported
                document.getElementById("error").innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        // Function to display the position (latitude and longitude)
        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            document.getElementById("location").innerHTML =
                "Latitude: " + latitude + "<br>Longitude: " + longitude;
        }

        // Function to handle errors (e.g., user denies permission)
        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById("error").innerHTML = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById("error").innerHTML = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    document.getElementById("error").innerHTML = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById("error").innerHTML = "An unknown error occurred.";
                    break;
            }
        }