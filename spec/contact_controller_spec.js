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
      this.book.addContact("Alice", "987-654-3211").then((contact) => {
        expect(contact.name).toBe("Alice");
        expect(contact.phone).toBe("987-654-3211");
        done();
      })
      .catch((err) => {
        done();
      });
    });
  });
