        const events = {}; // Store events
        let currentMonth = new Date().getMonth();

        const getMonthName = (month) => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return months[month];
        };

        const createCalendar = () => {
            const calendarDiv = document.getElementById('calendar');
            calendarDiv.innerHTML = '';
            const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
            const firstDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay();

            // Add headers for each day
            daysOfWeek.forEach(day => {
                const header = document.createElement('div');
                header.classList.add('day-header');
                header.textContent = day;
                calendarDiv.appendChild(header);
            });

            // Empty spaces before the first day of the month
            for (let i = 0; i < firstDay; i++) {
                const emptyDiv = document.createElement('div');
                calendarDiv.appendChild(emptyDiv);
            }

            // Create days
            for (let day = 1; day <= daysInMonth; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.innerHTML = `<h3>${day}</h3>`;

                const eventDate = `${new Date().getFullYear()}-${currentMonth + 1}-${day}`;
                if (events[eventDate]) {
                    events[eventDate].forEach(event => {
                        const eventDiv = document.createElement('div');
                        eventDiv.classList.add('event', `event-type-${event.type}`);
                        eventDiv.textContent = event.name;
                        dayDiv.appendChild(eventDiv);
                    });
                }

                calendarDiv.appendChild(dayDiv);
            }

            document.getElementById('current-month').textContent = `${getMonthName(currentMonth)} ${new Date().getFullYear()}`;
        };

        const changeMonth = (direction) => {
            currentMonth += direction;
            if (currentMonth > 11) currentMonth = 0;
            if (currentMonth < 0) currentMonth = 11;
            createCalendar();
        };

        const openForm = (eventDate) => {
            document.getElementById('formDiv').style.display = 'block';
            document.getElementById('eventDate').value = eventDate;
        };

        const closeForm = () => {
            document.getElementById('formDiv').style.display = 'none';
        };

        const myFunc = (event) => {
            event.preventDefault();

            const eventName = document.getElementById('eventName').value;
            const eventType = document.getElementById('eventType').value;
            const eventDate = document.getElementById('eventDate').value;

            if (!events[eventDate]) {
                events[eventDate] = [];
            }

            events[eventDate].push({ name: eventName, type: eventType });

            createCalendar();
            closeForm();
        };

        // Initialize the calendar
        createCalendar();
