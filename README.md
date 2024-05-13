## Инструкция по запуску ##

Для начала работы на ПК должены быть установлены NodeJs, NestJS, Docker или Postgres

1) Запустите терминал из папки с проектом и введите команду 'npm i'
2) Для запуска БД в докер-контейнере введите команду   'docker-compos up'. Либо, так же, Вы можете запустить Postgre server и создать на нем БД с именем 'new_disc'.
Параметры подключения к БД опишите в файле .env. По умолчанию в файле .env хранится информация для подключения к БД в докер-контейнере.
3) Для запуска проекта используйте команду 'npm run start'
4) После, API будет доступен по адресу http://localhost:5000;
Документация Swagger - http://localhost:5000/swagger;

## Сомнения по деталям ##

В требованиях написано, что одним из пяти методов должен быть метод получения занятий с оценкой учеников (во множественном числе). Но в описание методов приведен следующий список:\
•	 GET /user \
•	POST /users \
•	GET /lessons/{id} - ??? Получение одного урока по id \
•	POST /lessons \
•	POST /lessons/{id}/evaluations \
Далее в описании каждого метода, приведен пример GET /lessons, который ответом возвращает массив (значит уроков подразумевается несколько).

Из всего выше перечисленного, было принято решение, что в списке методов было допущена ошибка, и требуемый список методов выглядит следующим образом.\
•	GET /user \
•	POST /users \
•	GET /lessons/{id} - ??? Получение одного урока по id \
•	POST /lessons \
•	POST /lessons/{id}/evaluations
 
