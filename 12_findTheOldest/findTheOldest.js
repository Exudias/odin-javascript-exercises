const findTheOldest = function(people) {
    let oldest = undefined;
    let oldestAge = 0;
    for (person of people)
    {
        let deathYear = person.yearOfDeath || new Date().getFullYear();
        let age = deathYear - person.yearOfBirth;
        if (age > oldestAge)
        {
            oldestAge = age;
            oldest = person;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
