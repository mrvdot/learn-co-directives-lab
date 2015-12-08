angular.module('myApp', [])
  .directive('employeeRepeater', function () {
    return {
      template: '',
      scope: {
        employees: '=employeeRepeater'
      }
    }
  })
  .directive('departmentRepeater', function () {
    return {
      template: '',
      scope: {
        departments: '=departmentRepeater'
      }
    }
  })
  .directive('conditionalDepartmentRepeater', function () {
    return {
      template: '',
      scope: {
        departments: '=conditionalDepartmentRepeater'
      }
    }
  })
  .directive('employeeSwitch', function () {
    return {
      template: '',
      scope: {
        employees: '=employeeSwitch'
      }
    }
  })
  .directive('clickHandler', function () {
    return {
      template: ''
    }
  });