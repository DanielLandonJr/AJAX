// es6 module import
import * as ex from './external.js';

const AJAX_Test = (() => {
  // dom loaded
  document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded...');
  })

  const ajaxCall = () => {
    // create new request object
    let myRequest = new Request('external.html');
    // make the call
    fetch(myRequest)
      .then((response) => {
        // good response
        return response.text();
      }).then((text) => {
        // this will load html to page...but it does not work with javascript
        document.querySelector('#ajax_content').innerHTML = text;

        // call function that modifies the dom of the imported html
        ex.ExtFile.init();
      }).catch((error) => {
        // error...display
        console.log(`Fetch Error =\n`, error);
      });
  };

  // public
  return {
    init: () => {
      ajaxCall();

      document.querySelector('#container h1').classList.add('border');
    }
  }
})();

AJAX_Test.init();