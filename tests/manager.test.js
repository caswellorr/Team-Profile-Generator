

const Manager = require("../lib/manager");

describe ("Manager", () => {

  describe("instantiation", () => {

    it("should pass and instantiate object correctly", () => {

      // Arrange
      // Act
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);

      // Assert
      expect(testManager.name).toBe("Mick");
      expect(testManager.id).toBe(10);
      expect(testManager.email).toBe("mickjagger@yahoo.com");
      expect(testManager.officeNmuber).toBe(1966);

    });

  });

  describe("getName", () => {
    
    it("should return name correctly", () => {

      // Arrange
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);


      // Act
      let name = testManager.getName();
  
      // Assert
      expect(name).toBe("Mick");
      
    });
    
  });

  describe("getRole", () => {

    it("should return role correctly", () => {

      // Arrange 
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);


      // Act
      let role = testManager.getRole();
  
      // Assert
      expect(role).toBe("Manager");
      
    });

  });

  describe("getId", () => {

    it("should return id correctly", () => {
      
      // Arrange 
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);

      // Act
      let id = testManager.getId();
  
      // Assert
      expect(id).toBe("10");
      
    });

  });

  describe("getEmail", () => {

    it("should return email correctlty", () => {

      // Arrange 
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);

      // Act
      let email = testManager.getEmail();
  
      // Assert
      expect(email).toBe("mickjagger@yahoo.com");

    });

  });

  describe ("getOfficeNumber", () => {

    it("should return office number correctly", () => {

      // Arrange
      let testManager = new Manager ("Mick", 10, "mickjagger@yahoo.com", 1966);

      // Act
      let officeNumber = testManager.getOfficeNumber();

      // Assert
      expect(officeNumber).toBe(1966);

    });

  });
















})