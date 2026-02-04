#! /bin/bash

echo "Démarrage de l'application Laravel..."


echo "Running migrations from app..."
php artisan migrate --force

# on creer un lien symbolique
php artisan storage:link --force

# On lance les optimisations Laravel
php artisan config:cache
php artisan cache:clear

exec "$@"





