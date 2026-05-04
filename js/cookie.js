/* Global Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
}

/* Navbar */
.navbar {
    background-color: #333;
    padding: 15px;
    text-align: center;
}

.navbar-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar-list li {
    display: inline-block;
    margin: 0 15px;
}

.navbar-list li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

.navbar-list li a:hover {
    text-decoration: underline;
}

/* Hero Section */
.hero {
    background: url('/hero-texture.webp') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 0 20px;
}

.hero-content h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 30px;
}

.hero .btn {
    background-color: #00b300;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.hero .btn:hover {
    background-color: #009900;
}

/* Main Section */
.section {
    padding: 60px 20px;
    text-align: center;
    background-color: #f4f4f4;
}

.section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.section p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
}

/* Call to Action Section */
.center {
    background-color: #333;
    color: white;
}

.center .btn {
    background-color: #00b300;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.center .btn:hover {
    background-color: #009900;
}

/* Footer */
footer {
    background-color: #222;
    color: white;
    padding: 20px;
    text-align: center;
}

footer a {
    color: #00b300;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.2rem;
    }

    .section h2 {
        font-size: 2rem;
    }

    .section p {
        font-size: 1rem;
    }
}