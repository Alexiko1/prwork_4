// Генерации случайного числа для генерации месяца
const mon = Math.floor(Math.random() * 3);
const personGenerator = {
    //Фамилия
    surNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    //Мужские имена
    firstNameMaleJson: `{             
        "count": 10,
        "list": {     
            "id_1": "Артем",
            "id_2": "Владислав",
            "id_3": "Виктор",
            "id_4": "Анатолий",
            "id_5": "Андрей",
            "id_6": "Сергей",
            "id_7": "Павел",
            "id_8": "Александр",
            "id_9": "Вадим",
            "id_10": "Дмитрий"
        }
    }`,   
    //Женские имена 
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Екатерина",
            "id_3": "Наталия",
            "id_4": "Татьяна",
            "id_5": "Анжела",
            "id_6": "Галина",
            "id_7": "Светлана",
            "id_8": "Ольга",
            "id_9": "Алена",
            "id_10": "Светлана"
        }
    }`,       
    //Отчество
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Викторов",
            "id_2": "Александров",
            "id_3": "Евгеньев",
            "id_4": "Иванов",
            "id_5": "Анатольев",
            "id_6": "Петров",
            "id_7": "Юрье",
            "id_8": "Борисо",
            "id_9": "Максимов",
            "id_10": "Николаев"
        }
    }`,
    //Профессия мужчины
    profimanJson: `{
        "count": 10,
        "list": {
            "id_1": "Автослесарь",
            "id_2": "Водитель",
            "id_3": "Механик",
            "id_4": "Электрик",
            "id_5": "Рабочий",
            "id_6": "Врач",
            "id_7": "Сантехник",
            "id_8": "Менеджер",
            "id_9": "Машинист",
            "id_10": "Юрист"
        }
    }`,      
    //Профессия женщины
    profiwomanJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Журналистка",
            "id_3": "Повар",
            "id_4": "Учитель",
            "id_5": "Продавец",
            "id_6": "Бухгалтер",
            "id_7": "Парикмахер",
            "id_8": "Фотограф",
            "id_9": "Ветеринар",
            "id_10": "Официант"
        }
    }`,                                                                       
    GENDER_MALE: 'Мужчина ',
    GENDER_FEMALE: 'Женщина ',
    //Мужчина или Женщина
    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;     
    },
    //Общая генерация данных
    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), 
    //Ссылка общей генерации на остальное
    randomValue: function (json) {                                                            
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;      
        return obj.list[prop];
    },
    //Имя
    randomFirstName: function() {
        if (this.person.gender == 'Мужчина ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    //Фамилия
    randomSurName: function() {
        if (this.person.gender == 'Мужчина ') {
            return this.randomValue(this.surNameJson);
        } else {
            return this.randomValue(this.surNameJson) + "а";
        }
    },
     //Отчество
    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },
    // Функция генерации месяцев, в которых 31 день
    randomMonth31: function randomMonth() {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    // Функция генерации месяцев, в которых 30 дней
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },
    // Функция генерации месяца Февраль
    randomMonthFeb28: function randomMonth() {
		let month = `февраля`
		return month;
	},
    //Год рождения
    rendomYear: function() { // Функция генерации Года
        return this.randomIntNumber(1945, 2000) + " года";
    },
    //Профессия
    randomProfi: function() {
        if (this.person.gender == 'Мужчина ') {
            return this.randomValue(this.profimanJson);
        } else {
            return this.randomValue(this.profiwomanJson);
        }
    },
    getPerson: function () {                                   
        this.person = {};
        this.person.gender = this.randomGender();              //Мужчина или Женщина
        this.person.surName = this.randomSurName();            //Фамилия
        this.person.firstName = this.randomFirstName();        //Имя
        this.person.patronymic = this.randomPatronymic();      //Отчество
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);     //Генерация чисел в месяцах, в которых 31 день
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);     //Генерация чисел в месяцах, в которых 30 деней
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);     //Генерация чисел в месяце, в котором 28 дней
        }
        this.person.year = this.rendomYear(1940, 2000);        //Год рождения
        this.person.prof = this.randomProfi();                 //Профессия
        return this.person;
    }                                                                                        
};