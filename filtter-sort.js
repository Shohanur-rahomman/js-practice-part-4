function filterAndSortUsers(users, ageHold) {
    return users.filter(user => user.age > ageHold)
        .sort((a, b) => a.name.localeCompare(b.name))
}

const users = [
    {name:'joy',age:25},
    {name:'joys',age:20},
    {name:'joyss',age:15},
    {name:'joy',age:50}
]

const resultObject = filterAndSortUsers(users,15);
console.log(resultObject);