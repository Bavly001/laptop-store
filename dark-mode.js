const mode_button = document.getElementById('circle');
let validity = false;

function darkMode() {
      validity = !validity;
      if (validity) {
            document.documentElement.style.setProperty('--color1', '#112b3c');
            document.documentElement.style.setProperty('--color2', '#efefef');
            document.documentElement.style.setProperty('--fixed-color2', '#5399c8');
            mode_button.style.left = '18px';
      }
      else {
            document.documentElement.style.setProperty('--color1', '#efefef');
            document.documentElement.style.setProperty('--color2', '#112b3c');
            document.documentElement.style.setProperty('--fixed-color2', '#205375');
            mode_button.style.left = '-11px';
      }
}
