const testMethod = (() => {
   const log = (message) => {
      //console.log(message);
      alert(message);
   }
   return {
      log: log
   }
})();


module.export = testMethod;
