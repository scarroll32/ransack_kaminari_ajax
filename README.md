# Setup

```
rails new ransack_kaminari_ajax --database=postgresql
cd ransack_kaminari_ajax
```

Add gems

```
gem 'bootstrap', '~> 4.1.3'
gem 'ransack'
gem 'kaminari'
gem 'bootstrap4-kaminari-views'
gem 'jquery-rails'
gem 'bootstrap-generators'
```

```
bundle
```

Configure bootstrap

```
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
```

Import Bootstrap styles in app/assets/stylesheets/application.scss:

Remove all ```*= require``` statements
```
// Custom bootstrap variables must be set or imported *before* bootstrap.
@import "bootstrap";

```

```
rails generate bootstrap:install
```

Add Bootstrap dependencies and Bootstrap to your application.js:

```
//= require jquery3
//= require popper
//= require bootstrap-sprockets
```

# Create Application

```
rails g scaffold Component name description
rails db:create
rails db:migrate
```

In routes.rb

```
root 'components#index'
```
