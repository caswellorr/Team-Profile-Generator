

const Intern = require("../lib/intern");

describe ("Intern", () => {

  describe("instantiation", () => {

    it("should pass and instantiate object correctly", () => {
      
      // Arrange 
      // Act
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");
  
      // Assert
      expect(testIntern.name).toBe("Ronnie");
      expect(testIntern.id).toBe(67);
      expect(testIntern.email).toBe("ronniewood@yahoo.com");
      expect(testIntern.school).toBe("University of London");
 
    });

  })
  
  describe("getName", () => {
    
    it("should return name correctly", () => {

      // Arrange
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");

      // Act
      let name = testIntern.getName();
  
      // Assert
      expect(name).toBe("Ronnie");
      
    });
    
  });

  describe("getRole", () => {

    it("should return role correctly", () => {

      // Arrange 
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");

      // Act
      let role = testIntern.getRole();
  
      // Assert
      expect(role).toBe("Intern");
      
    });

  });

  describe("getId", () => {

    it("should return id correctly", () => {
      
      // Arrange 
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");

      // Act
      let id = testIntern.getId();
  
      // Assert
      expect(id).toBe(67);
      
    });

  });

  describe("getEmail", () => {

    it("should return email correctly", () => {

      // Arrange 
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");

      // Act
      let email = testIntern.getEmail();
  
      // Assert
      expect(email).toBe("ronniewood@yahoo.com");

    });

  });

  describe("getSchool", () => {

    it("should return the attended university correctly", () => {

      // Arrange 
      let testIntern = new Intern ("Ronnie", 67, "ronniewood@yahoo.com", "University of London");

      // Act
      let school = testIntern.getSchool();
  
      // Assert
      expect(school).toBe("University of London");

    });

  });

});