
const Employee = require("../lib/employee");

describe ('Employee', () => {

  describe('instantiation', () => {

    it('should pass and instantiate object correctly', () => {
      // Arrange 
      
      // Act
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
  
      // Assert
      expect(testEmployee.name).toBe("Jason")
      expect(testEmployee.id).toBe(1)
      expect(testEmployee.email).toBe("jasonday@gmail.com")
      
    });

  })
  
  describe('getName', () => {
    
    it('should return name correctly', () => {
      // Arrange 
      
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
      // Act
      let name = testEmployee.getName()
  
      // Assert
      expect(name).toBe("Jason");
      
    });
   
    
  });

  describe('getRole', () => {

    it('should return role correctly', () => {
      // Arrange 
  
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
      // Act
      let role = testEmployee.getRole()
  
      // Assert
      expect(role).toBe("Engineer");
      
    });

  });

  describe('getId', () => {

    it('should return id correctly', () => {
      // Arrange 

      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
      // Act
      let id = testEmployee.getId()
  
      // Assert
      expect(id).toBe("1");
      
    });

  });

  describe('getEmail', () => {

    it('should return email correctlty', () => {
      // Arrange 
  
      let testEmployee = new Employee ("Jason", 1 , "jasonday@gmail.com")
      // Act
      let email = testEmployee.getEmail()
  
      // Assert
      expect(email).toBe("jasonday@gmail.com");

    });

  });

})