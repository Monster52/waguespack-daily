function calendar(date) {
  // If no parameter is passed use the current date.
  if(date == null)
     date = new Date();

  day = date.getDate();
  month = date.getMonth();
  year = date.getFullYear();

  days = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
  months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

  this_month = new Date(year, month, 1);
  next_month = new Date(year, month + 1, 1);

  // Find out when this month starts and ends.
  first_week_day = this_month.getDay();
  days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));

  calendar_html = '<table style="background-color:666699; color:ffffff; hight: 100%; width: 100%">';
  calendar_html += '<tr><td colspan="7" style="background-color:9999cc; color:000000; text-align: center;">' + months[month] + ' ' + year + '</td></tr>';
  calendar_html += '<tr style="text-align: center;"><td>Sun</td><td>Mon</td><td>Tues</td><td>Wed</td><td>Thur</td><td>Fri</td><td>Sat</td>'
  calendar_html += '<tr>';

  // Fill the first week of the month with the appropriate number of blanks.
  for(week_day = 0; week_day < first_week_day; week_day++) {
    calendar_html += '<td style="background-color:9999cc; color:000000;"> </td>';
  }

  week_day = first_week_day;
  for(day_counter = 1; day_counter <= days_in_this_month; day_counter++) {
    week_day %= 7;
    if(week_day == 0)
      calendar_html += '</tr><tr>';

    // Do something different for the current day.
    if(day == day_counter)
      calendar_html += '<td style="text-align: center;"><b>' + day_counter + '</b></td>';
    else
      calendar_html += '<td style="background-color:9999cc; color:000000; text-align: center;"> ' + day_counter + ' </td>';

    week_day++;
  }

  calendar_html += '</tr>';
  calendar_html += '</table>';

  // Display the calendar.
  document.write(calendar_html);
}

