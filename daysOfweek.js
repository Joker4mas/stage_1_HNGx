//functions for the currentUtcTime
// and functions for Current Day of the week






//function for days of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();
        const currentDayOfWeek = daysOfWeek[currentDayIndex];

        // Update the content of the div element with the data-testId attribute
        const currentDayElement = document.querySelector('[data-testId="currentDayOfTheWeek"]');
        currentDayElement.textContent = `Today is ${currentDayOfWeek}`;