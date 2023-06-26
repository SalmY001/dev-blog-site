module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    // Custom helper 'format_date' that takes in a timestamp,
    // format date as M/D/YYYY
  
    // The custom helper 'format_date' takes in a timestamp
    format_date: (date) => {
      // We format month, date and year
      const month = new Date(date).getMonth() +1;
      const day = new Date(date).getDate();
      const year = new Date(date).getFullYear();
  
      // Add one to the month since it is returned as a zero-based value
      return `${month}/${day}/${year}`;
    }
};
  