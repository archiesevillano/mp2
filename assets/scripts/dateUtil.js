export class BrowserDate {
    constructor(date) {
        this._daysInWeek = [
            {
                abbreviation: "Sun",
                dayName: "Sunday",
                type: "Weekend",
            },
            {
                abbreviation: "Mon",
                dayName: "Monday",
                type: "Weekday",
            },
            {
                abbreviation: "Tue",
                dayName: "Tuesday",
                type: "Weekday",
            },
            {
                abbreviation: "Wed",
                dayName: "Wednesday",
                type: "Weekday",
            },
            {
                abbreviation: "Thu",
                dayName: "Thursday",
                type: "Weekday",
            },
            {
                abbreviation: "Fri",
                dayName: "Friday",
                type: "Weekday",
            },
            {
                abbreviation: "Sat",
                dayName: "Saturday",
                type: "Weekend",
            },

        ];
        this._months = [
            {
                monthName: "January",
                abbreviation: "Jan",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "February",
                abbreviation: "Feb",
                index: date.getMonth(),
                dayCount: ((date.getFullYear() % 4 == 0) && (date.getFullYear() % 100 != 0)) || (date.getFullYear() % 400 == 0) ? 29 : 28,
            },
            {
                monthName: "March",
                abbreviation: "Mar",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "April",
                abbreviation: "Apr",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "May",
                abbreviation: "May",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "June",
                abbreviation: "Jun",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "July",
                abbreviation: "Jul",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "August",
                abbreviation: "Aug",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "September",
                abbreviation: "Sep",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "October",
                abbreviation: "Oct",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "November",
                abbreviation: "Nov",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
            {
                monthName: "December",
                abbreviation: "Dec",
                index: date.getMonth(),
                dayCount: ((date.getMonth() + 1) % 2) == 0 ? 30 : 31,
            },
        ]
        this._hours = [
            {
                militaryTime: date.getHours().toString().length > 1 ? date.getHours().toString() : "0".concat(date.getHours()),
                standardTime: (date.getHours() % 12).toString().length > 1 ? (date.getHours() % 12).toString() : "0".concat((date.getHours() % 12)),
                ampm: date.getHours() <= 12 ? "AM" : "PM",
            }
        ];
        this._date = date;
        this._error = "none";
    }

    //provides error message to the user
    get errorMessage() {
        return this._error;
    }

    //get the current day's name, abbreviation, type weekend or weekday
    getDayInWeek(...type) {
        try {
            if (type.length > 0) {
                let typeVal = type[0].toString().toLowerCase();
                let keys = ["abbreviation", "dayName", "type", "none"];

                if (type == keys[0] || type == keys[1] || type == keys[2]) {
                    return this._daysInWeek[this._date.getDay()][type];
                }
                else if (typeVal == keys[3]) {
                    return this._daysInWeek[this._date.getDay()].dayName;
                }
                else {

                    let errorCasing = keys.every(key => {
                        let smallKey = key.toLowerCase();

                        return smallKey != typeVal;
                    });

                    if (!errorCasing) {
                        throw `Error letter case found at '${type}' . Please make sure to check your casing`;
                    }
                    else {
                        //throw an error if the argument does not exist in the key collection 
                        throw `Invalid key: '${type}' does not exist (Allowed Argument: none | abbreviation | type | dayName"`;
                    }
                }

            }
            else if (type.length > 1) {
                //throw an error message if there are more than 1 argument
                throw "dayInWeek(<>) should only have at least 0 to 1 argument(Allowed Argument: none | abbreviation | type | dayName";
            }
            else {
                //if no argument has been passed, return the current day's name
                return this._daysInWeek[this._date.getDay()].dayName;
            }
        }
        catch (error) {
            this._error = error;
            console.log(error);
        }
    }

    //get the current month name, abbreviation, dayCount, index
    getMonth(...type) {
        try {
            if (type.length > 0) {
                let typeVal = type[0].toString().toLowerCase();
                let keys = ["monthName", "abbreviation", "index", "dayCount", "none"];

                if (type == keys[0] || type == keys[1] || type == keys[2] || type == keys[3]) {
                    return this._months[this._date.getMonth()][type];
                }
                else if (typeVal == keys[4]) {
                    return this._months[this._date.getMonth()].monthName;
                }
                else {

                    let errorCasing = keys.every(key => {
                        let smallKey = key.toLowerCase();

                        return smallKey != typeVal;
                    });

                    if (!errorCasing) {
                        throw `Error letter case found at '${type}' . Please make sure to check your casing`;
                    }
                    else {
                        //throw an error if the argument does not exist in the key collection 
                        throw `Invalid key: '${type}' does not exist (Allowed Argument: none | abbreviation | type | monthName"`;
                    }
                }

            }
            else if (type.length > 1) {
                //throw an error message if there are more than 1 argument
                throw "dayInWeek(<>) should only have at least 0 to 1 argument(Allowed Argument: none | abbreviation | type | dayName";
            }
            else {
                //if no argument has been passed, return the current day's name
                return this._months[this._date.getMonth()].monthName;
            }
        }
        catch (error) {
            this._error = error;
            console.log(error);
        }
    }


}