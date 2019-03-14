const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

  beforeEach((done) => {
    this.book = new ContactController();
    sequelize.sync({force: true}).then((res) => {
      done();
    })
    .catch((err) => {
      done();
    });
  });
  it("Should be defined", () => {
    expect(ContactController).toBeDefined();
  });

});

  describe("addContact()", () => {
    it("should add a single contact to the book", (done) => {
      this.book.addContact("Alice", "987-654-3211","A-to-the-lice@gmail.com").then((contact) => {
        expect(contact.name).toBe("Alice");
        expect(contact.phone).toBe("987-654-3211");
        expect(contact.email).toBe("A-to-the-lice@gmail.com");
        done();
      })
      .catch((err) => {
        done();
      });
    });
  });
