export default class GoogleFont {
  static getFont(fonts){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url =`https://fonts.googleapis.com/css?family=${fonts}`;
      request.onload = function(){
        debugger;
        if (this.status === 200) {
          resolve (request.response);
        } else {
          reject (request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}