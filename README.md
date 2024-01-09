развернуть бд: docker run --name univer-postgres1 -e POSTGRES_DB=univer1 -e POSTGRES_USER=univer1 -e POSTGRES_PASSWORD=univer1 -p 5432:5432 -d postgres

накатить миграции  npx sequelize-cli db:migrate

запуск npm run start:dev
