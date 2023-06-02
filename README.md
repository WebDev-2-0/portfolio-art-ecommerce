# WP Art Ecommerce Theme 🎨
> An engaging and beautiful WordPress theme for artists to showcase and sell their artworks.

![Artwork](./HTML-CSS/public/DreamShaper_v5_A_beautiful_and_dreamy_representational_picture_1.jpg)

## Introduction 🌟
Welcome to the WP Art Ecommerce Theme! This theme is designed to provide artists with a visually stunning and user-friendly platform to display and sell their artworks online. Inspired by the elegant designs of [Art by Rodca](https://artbyrodca.com/), this theme aims to capture the essence of creativity and bring it to life in a WordPress environment.

## Project Structure 📂
The project has the following structure:

### HTML-CSS Folder
This folder contains the draft and mockup for the original WordPress theme. It consists of the following files:

- `index.html`: The first page of the website.
- `package.json` and `package-lock.json`: Files containing metadata and project dependencies.
- `styles.css`: Configuration file for Tailwind CSS.
- `scripts.js`: File containing scripts for page interactivity.
- `server.js`: Template for Node.js HTTP Server that handles static file requests.
- `tailwind.config.js`: Configuration file for Tailwind CSS.

### WP-Art-Ecommerce Folder
This folder contains the WordPress theme files:

- `inc` folder: Contains the following PHP files:
  - `custom-header.php`: Custom header implementation.
  - `customizer.php`: Theme customizer options.
  - `jetpack.php`: Jetpack compatibility.
  - `template-functions.php`: Template functions for the theme.
  - `template-tags.php`: Template tags for the theme.
  - `woocommerce.php`: WooCommerce compatibility.

- `js` folder: Contains the following JavaScript files:
  - `customizer.js`: JavaScript file for theme customizer.
  - `navigation.js`: JavaScript file for navigation functionality.

- `languages` folder: Contains the following files:
  - `readme.txt`: Readme file for language translations.
  - `wp-art-ecommerce.pot`: POT file for language translation.

- `template-parts` folder: Contains template parts for the theme.

- Additional WordPress theme files:
  - `404.php`: Custom 404 page template.
  - `archive.php`: Template for archive pages.
  - `comments.php`: Custom comments template.
  - `composer.json`: Composer configuration file.
  - `footer.php`: Theme footer template.
  - `header.php`: Theme header template.
  - `LICENSE`: License file for the theme.

## Installation and Usage 🚀
1. Clone the repository: `git clone https://github.com/nanagaisie1/wp-art-ecommerce.git`
2. Navigate to the project directory: `cd HTML-CSS`
3. Run `npm install` to install dependencies for the HTML-CSS folder.
4. For WordPress theme development, move the `wp-art-ecommerce` folder to your WordPress themes directory (`wp-content/themes/`).
5. Activate the WP Art Ecommerce Theme in your WordPress admin panel.
6. Customize and configure the theme settings to fit your requirements.
7. Start showcasing and selling your artworks!

## Features ✨
- Homepage displaying latest artworks from artists 🖼️
- Navigation links to different categories of artworks available 🎨
- Contact page with a form for users to contact the website owners 📧
- Product pages with detailed information on each artwork and a button to add to the cart 🛒
- Cart page displaying items added to the cart with an option to checkout 🛍️

## Future Enhancements 🚀
- Implement login and authentication for artists and users 🔐
- Add a search functionality for artwork 🔍
- Integrate a payment gateway for online transactions 💳

## License

 📄
This project is licensed under the [MIT License](LICENSE).

## Get Involved 🤝
Contributions are welcome! If you have any ideas or suggestions to enhance this theme, feel free to open an issue or submit a pull request. Together, let's make the WP Art Ecommerce Theme the go-to solution for artists worldwide! 🌎

## Acknowledgements 👏
- Art by Rodca for the inspiration and creative vision behind this theme.
- Tailwind CSS for providing a powerful and customizable framework.
- WordPress for its robust CMS platform and extensive theme development capabilities.