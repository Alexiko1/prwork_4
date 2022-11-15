//Кнопка "Генерация"
document.querySelector('#generation').addEventListener('click', function() {   
    const initPerson = personGenerator.getPerson();                                         
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDayOutput').innerText = initPerson.day;
    document.querySelector('#birthMonthOutput').innerText = initPerson.month;
    document.querySelector('#birthYearOutput').innerText = initPerson.year;
    document.querySelector('#profiOutput').innerText = initPerson.prof;
});
//Кнопка "Очистить"
document.querySelector('#clear').addEventListener('click', function() { 
    document.querySelector('#surnameOutput').innerText = 'Фамилия';
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#genderOutput').innerText = 'Генерация';
    document.querySelector('#birthDayOutput').innerText = '';
    document.querySelector('#birthMonthOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = 'Генерация';
    document.querySelector('#profiOutput').innerText = 'Генерация';
}
);
