
const Employee = require("../library/employee");

describe ('Employee', () => {

  describe('instantiation', () => {

    it('should pass and instantiate object correctly', () => {
      // Arrange 
      
      // Act
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
  A
      // Assert
      expect(testEmployee.name).toBe("Jason")
      expect(testEmployee.id).toBe(1)
      expect(testEmployee.email).toBe("jasonday@gmail.com")
      
    });

  })

  describe('getName', () => {

    it('should ', () => {
      // Arrange 
  
      // Act
  
      // Assert
      
    });


  });
  describe('getEmail', () => {

    it('should return email correctlty ', () => {
      // Arrange 
  
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
      // Act
      let email = testEmployee.getEmail()
  
      // Assert
      expect(email).toBe("jasonday@gmail.com");

    });


  });
  describe('getId', () => {

    it('should ', () => {
      // Arrange 
  
      // Act
  
      // Assert
      
    });


  });
  describe('getRole', () => {

    it('should ', () => {
      // Arrange 
  
      // Act
  
      // Assert
      
    });


  });


})