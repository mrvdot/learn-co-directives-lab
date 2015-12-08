angular.module('myApp', [])
  .directive('employeeRepeater', function () {
    return {
      template: '<p ng-repeat="e in employees" ng-class="e.role.toLowerCase()">{{e.name}}</p>',
      scope: {
        employees: '=employeeRepeater'
      }
    }
  })
  .directive('departmentRepeater', function () {
    return {
      template: '<p ng-repeat="(key, department) in departments" ng-class="{\'under-review\': department.underReview, \'reviewed\': !department.underReview}"><span class="key">{{key}}</span><span class="label">{{department.label}}</span></p>',
      scope: {
        departments: '=departmentRepeater'
      }
    }
  })
  .directive('conditionalDepartmentRepeater', function () {
    return {
      template: '<p ng-repeat="(key, department) in departments" ng-if="department.underReview"><span class="key">{{key}}</span><span class="label">{{department.label}}</span></p>',
      scope: {
        departments: '=conditionalDepartmentRepeater'
      }
    }
  })
  .directive('employeeSwitch', function () {
    return {
      template: ['<div ng-repeat="e in employees" ng-switch on="e.level">',
        '<p ng-switch-default>',
          '{{employee.name}}',
          '(<span class="role">{{employee.role}}</span>)',
        '</p>',
        '<p ng-switch-when="\'manager\'">',
          '{{employee.name}}',
          '(<span class="role">{{employee.role}} of {{employee.directReports}} reports</span>)',
        '</p>',
        '<p ng-class="employee.role" ng-switch-when="\'executive\'">',
          '{{employee.name}}',
          '(<span class="role">{{employee.role}}, executive of {{employee.department}}</span>)',
          '</p>',
      '</div>'].join("\r\n"),
      scope: {
        employees: '=employeeSwitch'
      }
    }
  })
  .directive('clickHandler', function () {
    return {
      template: '<button ng-click="handler($event)">Click me</button>'
    }
  });