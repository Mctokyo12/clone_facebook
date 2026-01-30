#! bash

echo "Running migrations from app..."
php artisan migrate --force

# on creer un lien symbolique
php artisan storage:link

# On lance les optimisations Laravel
php artisan config:cache
php artisan view:cache


