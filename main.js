const testMethod = (() => {
   const log = (message) => {
      console.log(message);
   }
   return {
      log: log
   }
})();

module.export = testMethod;
