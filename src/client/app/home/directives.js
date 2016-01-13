function hero() {
   return {
      template: require('./partials/hero.html')
   }
}

function thecode() {
   return {
      template: require('./partials/code.html'),
      controller: 'codeCtrl as cvm'
  }
}

function cocktails() {
   return {
      template: require('./partials/cocktails.html')
   }
}

function mentors() {
   return {
      template: require('./partials/mentors.html'),
      controller: 'mentorCtrl as mvm'
   }
}

function signup() {
   return {
      template: require('./partials/signup.html'),
      controller: 'topicCtrl as tvm'
   }
}

function contact() {
   return {
      template: require('./partials/contact.html')
   }
}

export default angular.module('home.directives', [])
   .directive('hero', hero)
   .directive('thecode', thecode)
   .directive('cocktails', cocktails)
   .directive('mentors', mentors)
   .directive('signup', signup)
   .directive('contact', contact);
