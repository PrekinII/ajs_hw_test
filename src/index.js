//import './css/style.css';

//import './js/app';

// TODO: write your code in app.js
export default function health(obj) {
    let res = 'critical';
    if (obj.health > 50) {
        res = 'healthy';
    } if (obj.health <= 50 && obj.health >= 15) {
        res = 'wounded';
    } if (obj.health < 15) {
        res = 'critical';
    }
    return res;
  }