

const Engineer = require("../lib/engineer");

describe ("Engineer", () => {

  describe("instantiation", () => {

    it("should pass and instantiate object correctly", () => {
      
      // Arrange 
      // Act
      let testEngineer = new Engineer ("Charlie", 22 , "charliewatt@yahoo.com", "charliewatt");
  
      // Assert
      expect(testEngineer.name).toBe("Charlie");
      expect(testEngineer.id).toBe(22);
      expect(testEngineer.email).toBe("charliewatt@yahoo.com");
      expect(testEngineer.gitHub).toBe("charliewatt");
 
    });

  })
  
  describe("getName", () => {
    
    it("should return name correctly", () => {

      // Arrange
      let testEngineer = new Engineer ("Charlie", 22 , "charliewatt@yahoo.com", "charliewatt");

      // Act
      let name = testEngineer.getName();
  
      // Assert
      expect(name).toBe("Charlie");
      
    });
    
  });

  describe("getRole", () => {

    it("should return role correctly", () => {

      // Arrange 
      let testEngineer = new Engineer ("Charlie", 22 , "charliewatt@yahoo.com", "charliewatt");

      // Act
      let role = testEngineer.getRole();
  
      // Assert
      expect(role).toBe("Engineer");
      
    });

  });

  describe("getId", () => {

    it("should return id correctly", () => {
      
      // Arrange 
      let testEngineer = new Engineer ("Charlie", 22 , "charliewatt@yahoo.com", "charliewatt");

      // Act
      let id = testEngineer.getId();
  
      // Assert
      expect(id).toBe("22");
      
    });

  });

  describe("getEmail", () => {

    it("should return email correctlty", () => {

      // Arrange 
      let testEngineer = new Engineer ("Charlie", 22 , "charliewatt@yahoo.com", "charliewatt");

      // Act
      let email = testEngineer.getEmail();
  
      // Assert
      expect(email).toBe("charliewatt@yahoo.com");

    });

  });

});