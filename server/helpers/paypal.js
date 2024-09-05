const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "Adcfh8holQITHYRWyk7YUHtMpe8xEZefVOLAISB4iIhu6Iy1UPKwGOWPpLcxly41kmxlhzhoGSuUXWGw",

  client_secret:
    "EHj9zxvggW-u8VkZ5qaTiVcsURH0TzDRG-oSZOMgRN3tN_PlX3HKpEuz4jH0qdQ6WFyFBBJLHGQlMPLF",
});

module.exports = paypal;
