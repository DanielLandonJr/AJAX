export const ExtFile = (() => {

  const changeIt = () => {
    // make changes to dom elements in the imported file
    document.querySelector('#external_section').classList.add('border');

    document.querySelector('#external_li-1').style.color = 'red';
  };

  // public
  return {
    init: () => {
      changeIt();
    }
  }
})();