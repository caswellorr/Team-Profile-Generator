

const Employee = require("../lib/employee");

describe ("Employee", () => {

  describe("instantiation", () => {

    it("should pass and instantiate object correctly", () => {
      
      // Arrange 
      // Act
      let testEmployee = new Employee ("Keith", 14, "keithrichards@yahoo.com");
  
      // Assert
      expect(testEmployee.name).toBe("Keith");
      expect(testEmployee.id).toBe(14);
      expect(testEmployee.email).toBe("keithrichards@yahoo.com");
      
    });

  })
  
  describe("getName", () => {
    
    it("should return name correctly", () => {

      // Arrange
      let testEmployee = new Employee ("Keith", 14, "keithrichards@yahoo.com");

      // Act
      let name = testEmployee.getName();
  
      // Assert
      expect(name).toBe("Keith");
      
    });
    
  });

  describe("getRole", () => {

    it("should return role correctly", () => {

      // Arrange 
      let testEmployee = new Employee ("Keith", 14, "keithrichards@yahoo.com");

      // Act
      let role = testEmployee.getRole();
  
      // Assert
      expect(role).toBe("Employee");
      
    });

  });

  describe("getId", () => {

    it("should return id correctly", () => {
      
      // Arrange 
      let testEmployee = new Employee ("Keith", 14, "keithrichards@yahoo.com");

      // Act
      let id = testEmployee.getId();
  
      // Assert
      expect(id).toBe(14);
      
    });

  });

  describe("getEmail", () => {

    it("should return email correctly", () => {

      // Arrange 
      let testEmployee = new Employee ("Keith", 14, "keithrichards@yahoo.com");

      // Act
      let email = testEmployee.getEmail();
  
      // Assert
      expect(email).toBe("keithrichards@yahoo.com");

    });

  });

});