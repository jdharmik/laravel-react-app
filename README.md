# laravel-react-app

step to install:-

1.Run `composer install`
2.Copy .env.example to .env and run this command  `php artisan key:generate` in your project repository 
3.Create a database in your localhost and edit these three settings in your .env
```
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
4. Run `php artisan migrate:install` and then `php artisan migrate`
5. Open project repository and do `yarn install` and do `npm run dev`. This should open your `http://localhost:8081/public/js` in your default browser.
6. Now you can play around with this laravel-react-redux app (todo list)

