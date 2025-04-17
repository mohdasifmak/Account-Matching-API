// Sample users and companies

const users = [
    { username: "user1", password: "pass123" },
    { username: "user2", password: "hello456" }
  ];
  
  let companies = [
    { id: 1, companyName: "TechCorp", matchScore: 86, accountStatus: "Target" },
    { id: 2, companyName: "InnoSoft", matchScore: 72, accountStatus: "Not Target" },
    { id: 3, companyName: "CloudNova", matchScore: 95, accountStatus: "Target" }
  ];
  
  module.exports = { users, companies };
  