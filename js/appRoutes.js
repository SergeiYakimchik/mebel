define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/login': {
                templateUrl: 'login.html',
                dependencies: [
                    'l10n',
                    'controller/login/LoginController',
                    'service/RequestService', 
                    'service/AlertService'
                ]
            },
            '/vacation': {
                templateUrl : 'views/vacation.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'controller/vacation/VacationURLController',
                    'controller/vacation/VacationBalanceController',
                    'controller/vacation/VacationHistoryController',
                    'controller/vacation/VacationRequestController',
                    'controller/vacation/VacationCalendarController',
                    'factory/vacation/RequestStatusFactory',
                    'factory/vacation/EmployeeFactory',
                    'factory/vacation/VacationHistoryFactory',
                    'factory/vacation/VacationBalanceFactory',
                    'factory/vacation/VacationRequestFactory',
                    'factory/vacation/RequestTypeFactory',
                    'service/RequestService',
                    'service/AlertService'
                ]
            },
            '/admin': {
                templateUrl : 'views/admin.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'controller/admin/AdminURLController',
                    'controller/admin/AdminUnitController',
                    'controller/admin/AdminUsersController',
                    'controller/admin/AdminGeneralController',
                    'controller/admin/AdminLocationController',
                    'controller/admin/AdminCalendarController',
                    'factory/common/SpecializationFactory',
                    'service/RequestService',
                    'service/DataService',
                    'service/AlertService'

                ]
            },
            '/profile': {
                templateUrl : 'views/profile.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'controller/profile/ProfileURLController',
                    'service/DataService',
                    'service/AlertService'
                    
                ]
            }
        }
    };
});