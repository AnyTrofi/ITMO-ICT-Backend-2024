const db = require("../models")

async function main() {
  await db.User.create({
    username: "andrew",
    password: "test",
    firstName: "Andrew",
    lastName: "Trofimov",
    isAdmin: true
  })
}

main()