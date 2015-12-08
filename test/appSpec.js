describe('Learn.co App', function () {
  var people = [
    {
      id: 1,
      name: "John Smith",
      role: "Manager",
      level: "manager",
      directReports: 12
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "CFO",
      level: "executive",
      department: 'Finance'
    },
    {
      id: 3,
      name: "Bobby Tables",
      role: "Engineer",
      level: "employee"
    }
  ]
    , departments = {
      "hr": {
        label: "Human Resources",
        underReview: true,
      },
      "fin": {
        label: "Finance",
        underReview: false,
      },
      "acc": {
        label: "Accounting",
        underReview: true
      }
    }
    , scope, el;
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.people = people;
    scope.departments = departments;
  }));

  describe('ng-repeat', function () {
    describe('employees', function () {
      var tpl = '<div employee-repeater="people"></div>';
      beforeEach(inject(function ($compile) {
        el = $compile(tpl)(scope);
        scope.$digest();
      }));

      it('should list two employees', function () {
        expect(el.find('p').length).toBe(people.length);
      });

      it('should list John first', function () {
        expect(el.find('p').first().text()).toContain('John Smith')
      });
    });

    describe('departments', function () {
      var tpl = '<div department-repeater="departments"></div>';
      beforeEach(inject(function ($compile) {
        el = $compile(tpl)(scope);
        scope.$digest();
      }));

      it('should list three departments', function () {
        expect(el.find('p').length).toBe(3);
      });

      it('should render label and keycode for each department', function () {
        el.find('p').each(function () {
          var $department = $(this)
            , key = $department.find('.key').text()
            , label = $department.find('.label').text();

          expect(label).toBe(departments[key].label);
        });
      });
    });
  });

  describe('ng-class', function () {
    var $compile;

    beforeEach(inject(function (_$compile_) {
      $compile = _$compile_;
    }));

    it('should attach each employee\'s role in lower case as the class on the paragraph', function () {
      var tpl = '<div employee-repeater="people"></div>';
      el = $compile(tpl)(scope);
      scope.$digest();
      el.find('p').each(function (idx) {
        var $employee = $(this)
          , role = people[idx].role;

        expect($employee.attr('class')).toContain(role.toLowerCase());
      });
    });

    it('should set the element class based on if department is underReview', function () {
      var tpl = '<div department-repeater="departments"></div>'
        , urClass = 'under-review'
        , nurClass = 'reviewed';

      el = $compile(tpl)(scope);
      scope.$digest();
      el.find('p').each(function (idx) {
        var $department = $(this)
          , key = $department.find('.key').text()
          , underReview = departments[key].underReview;

        expect($department.attr('class')).toContain(underReview ? urClass : nurClass);
      });
    });
  });

  describe('ng-if', function () {
    var tpl = '<div conditional-department-repeater="departments"></div>';
    beforeEach(inject(function ($compile) {
      el = $compile(tpl)(scope);
      scope.$digest();
    }));

    it('should only list departments under review', function () {
      expect(el.find('p').length).toBe(2);

      el.find('p').each(function () {
        var $department = $(this)
          , key = $department.find('.key').text()
          , underReview = departments[key].underReview;

        expect(underReview).toBe(true);
      });
    });
  });

  describe('ng-switch', function () {
    var tpl = '<div employee-switcher="people"></div>';
    beforeEach(inject(function ($compile) {
      el = $compile(tpl)(scope);
      scope.$digest();
    }));

    it('should render correct template for each employee level', function () {
      el.find('p').each(function (idx) {
        var $employee = $(this)
          , level = people[idx].level
          , roleText = $employee.find('.role').text();

        switch (level) {
          case 'manager':
            var reports = people[idx].directReports;
            expect(roleText).toContain(reports + ' reports');
            break;
          case 'executive':
            var department = people[idx].department;
            expect(roleText).toContain('executive of ' + department);
            break;
          default:
            expect(roleText).toBe(people[idx].role);
        }
      });
    });
  });

  describe('ng-click', function () {
    var tpl = '<div click-handler></div>'
      , fn;
    beforeEach(inject(function ($compile) {
      fn = jasmine.createSpy('handler');
      scope.handler = fn;

      el = $compile(tpl)(scope);
      scope.$digest();
    }));

    it('should trigger the handler and pass on the DOM event', function () {
      el.find('button').trigger('click');
      scope.$digest();

      expect(fn).toHaveBeenCalledWith(jasmine.objectContaining({
        type: 'click'
      }));
    })
  })
});