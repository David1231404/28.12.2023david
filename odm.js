//некотору часть я подсмотрел, понимание было, но не до конца и я решил подсмотреть. 

function calculateAge() {
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;

    var birthDate = new Date(year, month - 1, day);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    } 

    document.getElementById('age').textContent = age;
  }