const MenuController =  require("../controllers/MenuController");

describe("MenuController", () => {
  beforeEach(() => {
    this.menu = new MenuController();
  })

  describe("remindMe()", () => {
    it("Phrase should be: Learning is a life-long pursuit", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
    });
<<<<<<< HEAD
<<<<<<< HEAD
  });

  describe("remindMe()", () => {
    it("Phrase should be: Learning is a life-long pursuit", () => {
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit")
    });
=======
>>>>>>> checkpoint-branch
=======
>>>>>>> 1fc6dd7264241574a2242d0e74e4b8dc7fe594a1
  })
});
