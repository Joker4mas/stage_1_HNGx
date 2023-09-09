//function for time of the day
       function updateUTCTime() {
            const utcTimeElement = document.querySelector('[data-testId="currentUTCTime"]');
            const currentTime = new Date().toUTCString();
            utcTimeElement.textContent = currentTime;
        }

        // Update the time initially and then every second
        updateUTCTime();
        setInterval(updateUTCTime, 1000);
